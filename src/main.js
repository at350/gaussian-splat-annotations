import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { SplatMesh } from '@sparkjsdev/spark';

// ---------- RENDERER ----------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.touchAction = 'none';
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// ---------- UI ----------
const ui = document.createElement('div');
ui.style.cssText = `
  position:absolute; top:12px; right:12px; width:300px; max-height:80vh; overflow:auto;
  font: 13px system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#eaeaea; 
  background: rgba(20,20,20,0.7); border:1px solid #2a2a2a; border-radius:10px; padding:10px;
  backdrop-filter:saturate(120%) blur(6px);
`;
ui.innerHTML = `
  <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px;">
    <strong style="font-size:14px;">Annotations</strong>
    <button id="exportBtn" style="margin-left:auto;">Export</button>
    <button id="importBtn">Import</button>
    <input id="importFile" type="file" accept="application/json" style="display:none"/>
  </div>
  <div style="display:flex; gap:6px; margin-bottom:8px;">
    <input id="titleInput" placeholder="Title"/>
  </div>
  <div style="display:flex; gap:6px">
    <textarea id="bodyInput" placeholder="Description" rows="3"></textarea>
  </div>
  <div style="display:flex; gap:6px; margin-top:6px;">
    <button id="addAtCenterBtn">Add at center</button>
    <button id="addOnClickBtn">Add on click</button>
  </div>
  <div id="list" style="margin-top:10px; display:grid; gap:8px;"></div>
`;
document.body.appendChild(ui);

// ---------- SCENE ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 2);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const splat = new SplatMesh({ url: '../assets/dormtest.ply' });
scene.add(splat);

// Camera framing
controls.target.set(0.1, 0, -0.35);
camera.position.set(0, 0, 0.6); // NEW: step back a bit
camera.lookAt(controls.target);
controls.update();

// Center marker for this splat specifically
const boxGeo = new THREE.BoxGeometry(0.02, 0.02, 0.02);
const boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const targetMarker = new THREE.Mesh(boxGeo, boxMat);
targetMarker.position.copy(controls.target);
targetMarker.visible = true;
scene.add(targetMarker);

// ---------- ANNOTATION SYSTEM ----------
// Data model
const assetName = 'dormtest.ply';
const annotations = []; // {id, world[3], title, body, label, leader, created, updated}
const raycaster = new THREE.Raycaster();
const clickPlane = new THREE.Plane(new THREE.Vector3(0,0,-1), 0); // camera-aligned per click

// Create label
function makeLabelDOM(title, body, idx) {
  const el = document.createElement('div');
  el.className = 'label';
  el.innerHTML = `
    <div class="hdr">${title || 'Untitled'}</div>
    <div class="desc">${body ? body : ''}</div>
    <div class="chip">#${idx+1}</div>
  `;
  return el;
}

// Create annotation
function addAnnotation(world, title, body) {
  const idx = annotations.length;
  const labelEl = makeLabelDOM(title, body, idx);
  const label = new CSS2DObject(labelEl);
  label.position.copy(world);

  // leader line (world-space short elbow)
  const lineGeom = new THREE.BufferGeometry().setFromPoints([world.clone(), world.clone()]);
  const lineMat  = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest:false, transparent:true, opacity:0.9 });
  const leader   = new THREE.Line(lineGeom, lineMat);
  leader.renderOrder = 999;

  scene.add(label);
  scene.add(leader);

  const ann = {
    id: crypto.randomUUID(),
    world: world.toArray(),
    title: title || '',
    body: body || '',
    label, leader,
    created: Date.now(),
    updated: Date.now()
  };
  annotations.push(ann);
  refreshList();
  return ann;
}

// Position label with a small camera-facing offset and update leader
function updateAnnotationVisual(ann) {
  const anchorPos = new THREE.Vector3().fromArray(ann.world);

  const toCam = anchorPos.clone().sub(camera.position).normalize();
  const right = new THREE.Vector3().crossVectors(toCam, camera.up).normalize();
  const up    = new THREE.Vector3().crossVectors(right, toCam).normalize();

  // Offset label
  const elbow = anchorPos.clone()
    .add(right.multiplyScalar(0.12))
    .add(up.multiplyScalar(0.06));
  ann.label.position.copy(elbow);

  // Update leader points: [anchor, just-short-of-elbow]
  const arr = ann.leader.geometry.attributes.position.array;
  arr[0]=anchorPos.x; arr[1]=anchorPos.y; arr[2]=anchorPos.z;
  arr[3]=elbow.x-0.01; arr[4]=elbow.y; arr[5]=elbow.z;
  ann.leader.geometry.attributes.position.needsUpdate = true;
}

// UI list
function refreshList() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  annotations.forEach((a, i) => {
    const row = document.createElement('div');
    row.className = 'ui-row';
    row.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:2px; max-width:200px;">
        <div style="font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${a.title || 'Untitled'}</div>
        <div style="font-size:12px; opacity:0.8; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${a.body || ''}</div>
      </div>
      <button data-act="fly">Fly</button>
      <button data-act="edit">Edit</button>
      <button data-act="del">Delete</button>
    `;
    row.querySelector('[data-act="fly"]').onclick = () => {
      const p = new THREE.Vector3().fromArray(a.world);
      controls.target.copy(p);
      camera.position.copy(p.clone().add(new THREE.Vector3(0,0,0.6)));
      controls.update();
    };
    row.querySelector('[data-act="edit"]').onclick = () => {
      const t = prompt('Title', a.title) ?? a.title;
      const b = prompt('Description', a.body) ?? a.body;
      a.title = t; a.body = b; a.updated = Date.now();
      // update DOM
      a.label.element.querySelector('.hdr').textContent = t || 'Untitled';
      a.label.element.querySelector('.desc').textContent = b || '';
      refreshList();
      saveLocal();
    };
    row.querySelector('[data-act="del"]').onclick = () => {
      scene.remove(a.label); scene.remove(a.leader);
      annotations.splice(i,1);
      // reindex label chips
      annotations.forEach((ann,j)=>{
        const chip = ann.label.element.querySelector('.chip');
        if (chip) chip.textContent = `#${j+1}`;
      });
      refreshList();
      saveLocal();
    };
    list.appendChild(row);
  });
}

// ---------- CLICK-TO-PLACE (plane-based placeholder) ----------
let placeOnClick = false;
document.getElementById('addOnClickBtn').onclick = () => {
  placeOnClick = true;
  // orient click plane to face camera through controls.target
  const n = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
  clickPlane.setFromNormalAndCoplanarPoint(n, controls.target);
};

renderer.domElement.addEventListener('click', (ev) => {
  if (!placeOnClick) return;
  // normalized device coords
  const ndc = new THREE.Vector2(
    (ev.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -(ev.clientY / renderer.domElement.clientHeight) * 2 + 1
  );
  raycaster.setFromCamera(ndc, camera);
  const hit = new THREE.Vector3();
  if (raycaster.ray.intersectPlane(clickPlane, hit)) {
    const title = document.getElementById('titleInput').value.trim();
    const body  = document.getElementById('bodyInput').value.trim();
    addAnnotation(hit, title, body);
    saveLocal();
  }
  placeOnClick = false;
});

// Add at center
document.getElementById('addAtCenterBtn').onclick = () => {
  const title = document.getElementById('titleInput').value.trim();
  const body  = document.getElementById('bodyInput').value.trim();
  addAnnotation(controls.target.clone(), title, body);
  saveLocal();
};

// ---------- PERSISTENCE ----------
function localKey() { return `ann-${assetName}`; }

function saveLocal() {
  const data = {
    assetName,
    version:1,
    annotations: annotations.map(a=>({
      id:a.id, world:a.world, title:a.title, body:a.body, created:a.created, updated:a.updated
    }))
  };
  localStorage.setItem(localKey(), JSON.stringify(data));
}

function loadLocal() {
  const raw = localStorage.getItem(localKey());
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    (data.annotations || []).forEach((a)=>{
      const ann = addAnnotation(new THREE.Vector3().fromArray(a.world), a.title, a.body);
      ann.id=a.id; ann.created=a.created; ann.updated=a.updated;
    });
    refreshList();
  } catch {}
}
loadLocal();

// Export / Import
document.getElementById('exportBtn').onclick = () => {
  const blob = new Blob([localStorage.getItem(localKey()) || '{}'], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${assetName}.annotations.json`;
  a.click();
  URL.revokeObjectURL(a.href);
};
document.getElementById('importBtn').onclick = () => document.getElementById('importFile').click();
document.getElementById('importFile').onchange = async (e) => {
  const f = e.target.files?.[0]; if (!f) return;
  const text = await f.text();
  localStorage.setItem(localKey(), text);
  // wipe current and reload
  annotations.splice(0).forEach(a=>{ scene.remove(a.label); scene.remove(a.leader); });
  loadLocal();
};

// ---------- RESIZE ----------
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);

// ---------- LOOP ----------
renderer.setAnimationLoop(() => {
  // update visuals per frame
  annotations.forEach(updateAnnotationVisual);
  controls.update(); // FIX: call it
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
});
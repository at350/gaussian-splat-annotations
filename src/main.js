import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { SplatMesh } from "@sparkjsdev/spark";

// ---------- RENDERER ----------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
Object.assign(renderer.domElement.style, {
  position: "fixed",
  inset: "0",
  touchAction: "none",
  display: "block",
});
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
Object.assign(labelRenderer.domElement.style, {
  position: "fixed",
  inset: "0",
  pointerEvents: "none",
});
document.body.appendChild(labelRenderer.domElement);

// ---------- UI ----------
const ui = document.createElement("div");
ui.style.cssText = `
  position:absolute; top:12px; right:12px; width:300px; max-height:80vh; overflow:auto;
  font: 13px system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#eaeaea; 
  background: rgba(20,20,20,0.7); border:1px solid #2a2a2a; border-radius:10px; padding:10px;
  backdrop-filter:saturate(120%) blur(6px); z-index:10;
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

// ---------- DECOR CSS ----------
const style = document.createElement("style");
style.textContent = `
  .label {
    pointer-events:auto;
    background:rgba(10,10,10,0.85);
    color:#f2f2f2;
    border:1px solid #2f2f2f;
    border-radius:8px;
    padding:6px 8px;
    max-width:220px;
    box-shadow:0 2px 10px rgba(0,0,0,0.35);
    transform:translateY(-6px);
    line-height:1.25;
  }
  .label .hdr { font-weight:600; margin-bottom:2px; }
  .label .desc { font-size:12px; opacity:0.9; white-space:pre-wrap; }
  .label .chip { font-size:10px; opacity:0.7; }
  button { background:#2a2a2a; color:#e2e2e2; border:1px solid #3a3a3a; border-radius:8px; padding:6px 8px; cursor:pointer; }
  button:hover { filter:brightness(1.1); }
  input, textarea { background:#111; color:#eaeaea; border:1px solid #2d2d2d; border-radius:8px; width:100%; }
`;
document.head.appendChild(style);

// ---------- SCENE ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
camera.position.set(0, 0, 2);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const splatUrl = import.meta.env.BASE_URL + "assets/dormtest.ply";
const splat = new SplatMesh({ url: splatUrl });
scene.add(splat);

// Camera framing
controls.target.set(0.1, 0, -0.35);
camera.position.set(0, 0, 0.6);
camera.lookAt(controls.target);
controls.update();

// Center marker
const boxGeo = new THREE.BoxGeometry(0.02, 0.02, 0.02);
const boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const targetMarker = new THREE.Mesh(boxGeo, boxMat);
targetMarker.position.copy(controls.target);
targetMarker.visible = true;
scene.add(targetMarker);

// ---------- ANNOTATIONS ----------
const assetName = "dormtest.ply";
const annotations = []; // {id, world[3], title, body, label, leader, created, updated}

// Create label DOM
function makeLabelDOM(title, body, idx) {
  const el = document.createElement("div");
  el.className = "label";
  el.innerHTML = `
    <div class="hdr">${title || "Untitled"}</div>
    <div class="desc">${body ? body : ""}</div>
    <div class="chip">#${idx + 1}</div>
  `;
  return el;
}

// Create annotation entity
function addAnnotation(world, title, body) {
  const idx = annotations.length;
  const labelEl = makeLabelDOM(title, body, idx);
  const label = new CSS2DObject(labelEl);
  label.position.copy(world);

  const lineGeom = new THREE.BufferGeometry().setFromPoints([
    world.clone(),
    world.clone(),
  ]);
  const lineMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    depthTest: false,
    transparent: true,
    opacity: 0.9,
  });
  const leader = new THREE.Line(lineGeom, lineMat);
  leader.renderOrder = 999;

  scene.add(label);
  scene.add(leader);

  const ann = {
    id: crypto.randomUUID(),
    world: world.toArray(),
    title: title || "",
    body: body || "",
    label,
    leader,
    created: Date.now(),
    updated: Date.now(),
  };
  annotations.push(ann);
  refreshList();
  return ann;
}

// Per-frame label placement
function updateAnnotationVisual(ann) {
  const anchorPos = new THREE.Vector3().fromArray(ann.world);
  const toCam = anchorPos.clone().sub(camera.position).normalize();
  const right = new THREE.Vector3().crossVectors(toCam, camera.up).normalize();
  const up = new THREE.Vector3().crossVectors(right, toCam).normalize();

  const elbow = anchorPos
    .clone()
    .add(right.multiplyScalar(0.12))
    .add(up.multiplyScalar(0.06));
  ann.label.position.copy(elbow);

  const arr = ann.leader.geometry.attributes.position.array;
  arr[0] = anchorPos.x;
  arr[1] = anchorPos.y;
  arr[2] = anchorPos.z;
  arr[3] = elbow.x - 0.01;
  arr[4] = elbow.y;
  arr[5] = elbow.z;
  ann.leader.geometry.attributes.position.needsUpdate = true;
}

// Sidebar
function refreshList() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  annotations.forEach((a, i) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "6px";
    row.style.alignItems = "center";
    row.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:2px; max-width:200px;">
        <div style="font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${
          a.title || "Untitled"
        }</div>
        <div style="font-size:12px; opacity:0.8; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${
          a.body || ""
        }</div>
      </div>
      <button data-act="fly">Fly</button>
      <button data-act="edit">Edit</button>
      <button data-act="del">Delete</button>
    `;
    row.querySelector('[data-act="fly"]').onclick = () => {
      const p = new THREE.Vector3().fromArray(a.world);
      controls.target.copy(p);
      camera.position.copy(p.clone().add(new THREE.Vector3(0, 0, 0.6)));
      controls.update();
    };
    row.querySelector('[data-act="edit"]').onclick = () => {
      const t = prompt("Title", a.title) ?? a.title;
      const b = prompt("Description", a.body) ?? a.body;
      a.title = t;
      a.body = b;
      a.updated = Date.now();
      a.label.element.querySelector(".hdr").textContent = t || "Untitled";
      a.label.element.querySelector(".desc").textContent = b || "";
      refreshList();
      saveLocal();
    };
    row.querySelector('[data-act="del"]').onclick = () => {
      scene.remove(a.label);
      scene.remove(a.leader);
      annotations.splice(i, 1);
      annotations.forEach((ann, j) => {
        const chip = ann.label.element.querySelector(".chip");
        if (chip) chip.textContent = `#${j + 1}`;
      });
      refreshList();
      saveLocal();
    };
    list.appendChild(row);
  });
}

// ---------- PICK PASS (Option A) ----------
/*
  We render the splat once to a 1×1 RGBA32F target, where the fragment writes world XYZ.
  If a splat covers the click pixel, alpha=1 and RGB=world position. Otherwise alpha=0.
  Steps:
    - Clone camera via setViewOffset to render only the target pixel
    - Temporarily swap the splat’s material for a pick material
    - Render to offscreen target and read back 4 floats
*/
const supportsFloatRT =
  renderer.capabilities.isWebGL2 &&
  !!renderer.extensions.get("EXT_color_buffer_float");

const pickTarget = new THREE.WebGLRenderTarget(1, 1, {
  type: THREE.FloatType,
  format: THREE.RGBAFormat,
  depthBuffer: true,
  stencilBuffer: false,
});
pickTarget.texture.name = "pickTarget";

const pickMaterial = new THREE.ShaderMaterial({
  name: "SplatPickMaterial",
  vertexShader: /* glsl */ `
    uniform mat4 modelMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    attribute vec3 position;
    varying vec3 vWorld;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vWorld = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
      // Note: This treats each splat as a point at its mean. Good match if means lie on the apparent surface.
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;
    varying vec3 vWorld;
    void main() {
      gl_FragColor = vec4(vWorld, 1.0);
    }
  `,
  blending: THREE.NoBlending,
  depthTest: true,
  depthWrite: true,
  transparent: false,
});

function pickWorldAtClientXY(clientX, clientY) {
  if (!supportsFloatRT) return null;

  // Convert to drawing buffer pixels
  const rect = renderer.domElement.getBoundingClientRect();
  const pxRatio = renderer.getPixelRatio();
  const x = Math.floor((clientX - rect.left) * pxRatio);
  const y = Math.floor((rect.bottom - clientY) * pxRatio); // y flip for viewOffset

  // Get full drawing buffer size
  const size = new THREE.Vector2();
  renderer.getDrawingBufferSize(size);

  // Save camera offset, swap material
  const clearColor = renderer.getClearColor(new THREE.Color()).clone();
  const clearAlpha = renderer.getClearAlpha();
  const origMaterial = splat.material;

  splat.material = pickMaterial;

  // Set 1×1 view into the big buffer at (x,y)
  camera.setViewOffset(size.x, size.y, x, y - 1, 1, 1); // y-1 to hit the exact pixel row
  renderer.setRenderTarget(pickTarget);
  renderer.setClearColor(0x000000, 0.0);
  renderer.clear(true, true, true);
  renderer.render(scene, camera);

  // Read back
  const buf = new Float32Array(4);
  renderer.readRenderTargetPixels(pickTarget, 0, 0, 1, 1, buf);

  // Restore state
  camera.clearViewOffset();
  splat.material = origMaterial;
  renderer.setRenderTarget(null);
  renderer.setClearColor(clearColor, clearAlpha);

  if (buf[3] === 0) return null; // no hit
  const v = new THREE.Vector3(buf[0], buf[1], buf[2]);
  if (!Number.isFinite(v.x) || !Number.isFinite(v.y) || !Number.isFinite(v.z))
    return null;
  return v;
}

// ---------- CLICK HANDLING ----------
const raycaster = new THREE.Raycaster();
const clickPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
let placeOnClick = false;

document.getElementById("addOnClickBtn").onclick = () => {
  placeOnClick = true;
  const n = new THREE.Vector3()
    .subVectors(camera.position, controls.target)
    .normalize();
  clickPlane.setFromNormalAndCoplanarPoint(n, controls.target);
};

renderer.domElement.addEventListener("click", (ev) => {
  if (!placeOnClick) return;

  // First try the splat-aware pick
  let hit = pickWorldAtClientXY(ev.clientX, ev.clientY);

  // Fallback to plane if nothing hit
  if (!hit) {
    const ndc = new THREE.Vector2(
      (ev.clientX / renderer.domElement.clientWidth) * 2 - 1,
      -(ev.clientY / renderer.domElement.clientHeight) * 2 + 1
    );
    raycaster.setFromCamera(ndc, camera);
    hit = new THREE.Vector3();
    const ok = raycaster.ray.intersectPlane(clickPlane, hit);
    if (!ok) hit = null;
  }

  if (hit) {
    const title = document.getElementById("titleInput").value.trim();
    const body = document.getElementById("bodyInput").value.trim();
    addAnnotation(hit, title, body);
    saveLocal();
  }

  placeOnClick = false;
});

// Add at center
document.getElementById("addAtCenterBtn").onclick = () => {
  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value.trim();
  addAnnotation(controls.target.clone(), title, body);
  saveLocal();
};

// ---------- PERSISTENCE ----------
function localKey() {
  return `ann-${assetName}`;
}

function saveLocal() {
  const data = {
    assetName,
    version: 1,
    annotations: annotations.map((a) => ({
      id: a.id,
      world: a.world,
      title: a.title,
      body: a.body,
      created: a.created,
      updated: a.updated,
    })),
  };
  localStorage.setItem(localKey(), JSON.stringify(data));
}

function loadLocal() {
  const raw = localStorage.getItem(localKey());
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    (data.annotations || []).forEach((a) => {
      const ann = addAnnotation(
        new THREE.Vector3().fromArray(a.world),
        a.title,
        a.body
      );
      ann.id = a.id;
      ann.created = a.created;
      ann.updated = a.updated;
    });
    refreshList();
  } catch {}
}
loadLocal();

// Export / Import
document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob([localStorage.getItem(localKey()) || "{}"], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${assetName}.annotations.json`;
  a.click();
  URL.revokeObjectURL(a.href);
};
document.getElementById("importBtn").onclick = () =>
  document.getElementById("importFile").click();
document.getElementById("importFile").onchange = async (e) => {
  const f = e.target.files?.[0];
  if (!f) return;
  const text = await f.text();
  localStorage.setItem(localKey(), text);
  annotations.splice(0).forEach((a) => {
    scene.remove(a.label);
    scene.remove(a.leader);
  });
  loadLocal();
};

// ---------- RESIZE ----------
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onResize);

// ---------- LOOP ----------
renderer.setAnimationLoop(() => {
  annotations.forEach(updateAnnotationVisual);
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
});

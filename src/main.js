import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { SplatMesh } from '@sparkjsdev/spark';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.touchAction = 'none';
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 2);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const splat = new SplatMesh({ url: '../assets/Sheridan_Rd.ply'});
scene.add(splat);

controls.target.set(0.1, 0, -0.35);   
camera.position.set(0, 0, 0.1); 
camera.lookAt(controls.target);
controls.update();

const boxGeo = new THREE.BoxGeometry(0.02, 0.02, 0.02);
const boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const targetMarker = new THREE.Mesh(boxGeo, boxMat);
targetMarker.position.copy(controls.target);
scene.add(targetMarker);

const anchorPos = controls.target.clone();         
const labelEl = document.createElement('div');
labelEl.className = 'label';
labelEl.textContent = 'Coffee cup';
const label = new CSS2DObject(labelEl);
scene.add(label);

const lineGeom = new THREE.BufferGeometry().setFromPoints([anchorPos, anchorPos.clone()]);
const lineMat  = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true, opacity: 0.9 });
const leader   = new THREE.Line(lineGeom, lineMat);
leader.renderOrder = 999;
scene.add(leader);

function updateAnnotation() {
  const toCam = anchorPos.clone().sub(camera.position).normalize();
  const right = new THREE.Vector3().crossVectors(toCam, camera.up).normalize();
  const up    = new THREE.Vector3().crossVectors(right, toCam).normalize();

  const anchor = anchorPos.clone().add(right.multiplyScalar(0.12)).add(up.multiplyScalar(0.06));
  label.position.copy(anchor);

  const arr = lineGeom.attributes.position.array;
  arr[0]=anchorPos.x; arr[1]=anchorPos.y; arr[2]=anchorPos.z;
  arr[3]=anchor.x-0.01;    arr[4]=anchor.y;    arr[5]=anchor.z;
  lineGeom.attributes.position.needsUpdate = true;
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);

renderer.setAnimationLoop(() => {
  updateAnnotation();
  controls.update;
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);

});

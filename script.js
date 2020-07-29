import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//scene.background = new THREE.Color( 0xff0000 );



// var geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
// var cube = new THREE.Mesh( geometry, material );

// //cube.position.x = 3;

// scene.add( cube );

camera.position.z = 5;

// addLight();

// function addLight() {
//   const color = 0xFFFFFF;
//   const intensity = 1;
//   const light = new THREE.DirectionalLight(color, intensity);
//   light.position.set(-1, 2, 4);
//   scene.add(light);
// }

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const light1 = new THREE.PointLight(0xc4c4c4, 1);
light1.position.set(0, 30, 50);
scene.add(light1);

const light2 = new THREE.PointLight(0xc4c4c4, 1);
light2.position.set(50, 10, 0);
scene.add(light2);

const light3 = new THREE.PointLight(0xc4c4c4, 1);
light3.position.set(0, 10, -50);
scene.add(light3);

const light4 = new THREE.PointLight(0xc4c4c4, 1);
light4.position.set(-50, 30, 0);
scene.add(light4);


const gltfLoader = new GLTFLoader();
const url = './models/monkey/Mesh_Chimpanzee.gltf';
gltfLoader.load(url, (gltf) => {

  gltf.scene.traverse( function ( child ) {
    if ( child.isMesh ) {
        child.geometry.center(); // center here
    }
  });

  gltf.scene.scale.set(0.05, 0.05, 0.05);
  scene.add(gltf.scene);
});

let controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', animate ); // use if there is no animation loop
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set( 0, 0, - 0.2 );
controls.update();


function animate() {
  //requestAnimationFrame( animate );

  //cube.position.x = ((cube.position.x + halfWidth + 0.05) % fullWidth) - halfWidth;
  //cube.position.y = (cube.position.y + 0.01) % window.innerHeight;  
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();


document.onkeydown = (e) => {
  e = e || window.event;

  if (e.keyCode == '38') {
    camera.position.z -= 0.1;
  }
  else if (e.keyCode == '40') {
    camera.position.z += 0.1;
  }
  else if (e.keyCode == '37') {
    camera.position.x -= 0.1;
    // left arrow
  }
  else if (e.keyCode == '39') {
    camera.position.x += 0.1;
    // right arrow
  }
}
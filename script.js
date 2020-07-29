let scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

addLight();

function addLight() {
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

function animate() {
  requestAnimationFrame( animate );

  if(cube.position.z > 5)
    cube.position.z = -100;
  else 
    cube.position.z += 0.05;
  //cube.position.x = ((cube.position.x + halfWidth + 0.05) % fullWidth) - halfWidth;
  //cube.position.y = (cube.position.y + 0.01) % window.innerHeight;  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();

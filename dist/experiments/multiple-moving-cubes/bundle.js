/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45;
	var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
	var NEAR = 1;
	var FAR = 10000;

	var scene = void 0;
	var camera = void 0;
	var renderer = void 0;
	var axisHelper = void 0;
	var gridHelper = void 0;
	var geometry = void 0;
	var geometry2 = void 0;
	var geometry3 = void 0;
	var geometry4 = void 0;
	var material = void 0;
	var material2 = void 0;
	var material3 = void 0;
	var material4 = void 0;
	var mesh = void 0;
	var mesh2 = void 0;
	var mesh3 = void 0;
	var mesh4 = void 0;
	var controls = void 0;
	var pointLight = void 0;
	var ambientLight = void 0;

	var origin = new THREE.Vector3(0, 0, 0);

	function init() {
	  scene = new THREE.Scene();

	  gridHelper = new THREE.GridHelper(100, 10);
	  scene.add(gridHelper);

	  axisHelper = new THREE.AxisHelper(100);
	  scene.add(axisHelper);

	  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	  camera.position.set(200, 200, 200);
	  camera.lookAt(origin);

	  geometry = new THREE.BoxGeometry(25, 25, 25);
	  geometry2 = new THREE.BoxGeometry(25, 25, 25);
	  geometry3 = new THREE.BoxGeometry(25, 25, 25);
	  geometry4 = new THREE.BoxGeometry(25, 25, 25);
	  material = new THREE.MeshNormalMaterial();
	  material2 = new THREE.MeshNormalMaterial();
	  material3 = new THREE.MeshNormalMaterial();
	  material4 = new THREE.MeshNormalMaterial();

	  mesh = new THREE.Mesh(geometry, material);
	  scene.add(mesh);

	  mesh2 = new THREE.Mesh(geometry2, material2);
	  scene.add(mesh2);

	  mesh3 = new THREE.Mesh(geometry3, material3);
	  scene.add(mesh3);

	  mesh4 = new THREE.Mesh(geometry4, material4);
	  scene.add(mesh4);

	  ambientLight = new THREE.AmbientLight(0x444444);
	  scene.add(ambientLight);

	  pointLight = new THREE.PointLight(0x0000ff, 1, 1000);
	  pointLight.position.set(100, 100, 100);
	  scene.add(pointLight);

	  renderer = new THREE.WebGLRenderer({ antialias: true });
	  renderer.setSize(window.innerWidth, window.innerHeight);

	  controls = new THREE.OrbitControls(camera, renderer.domElement);

	  THREEx.WindowResize(renderer, camera);

	  document.body.appendChild(renderer.domElement);
	}

	var angle = 0;

	function update() {
	  angle += 0.01;
	  var y = Math.sin(angle) * 20;
	  mesh.position.set(y, y, y);

	  angle += 0.01;
	  var y2 = Math.sin(angle) * 10;
	  mesh2.position.set(-y2, y2, y2);

	  angle += 0.01;
	  var y3 = Math.sin(angle) * 30;
	  mesh3.position.set(y3, y3, -y3);

	  angle += 0.01;
	  var y4 = Math.sin(angle) * 40;
	  mesh4.position.set(-y4, y3, -y2);

	  controls.update();
	}

	function render() {
	  renderer.render(scene, camera);
	}

	function tick() {
	  update();
	  render();
	  requestAnimationFrame(tick);
	}

	init();
	tick();

/***/ }
/******/ ]);
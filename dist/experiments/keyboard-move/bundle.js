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
/***/ (function(module, exports) {

	'use strict';

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
	var pointLight = void 0;
	var ambientLight = void 0;
	var keyboard = void 0;
	var mesh = void 0;

	var key = {
	  FORWARD: 'W',
	  BACK: 'S',
	  LEFT: 'A',
	  RIGHT: 'D',
	  UP: 'space',
	  DOWN: 'shift'
	};
	var origin = new THREE.Vector3(0, 0, 0);

	function init() {
	  keyboard = new KeyboardState();

	  scene = new THREE.Scene();

	  gridHelper = new THREE.GridHelper(100, 10);
	  scene.add(gridHelper);

	  axisHelper = new THREE.AxisHelper(100);
	  scene.add(axisHelper);

	  var geometry = new THREE.BoxGeometry(50, 50, 50);
	  var material = new THREE.MeshLambertMaterial({ color: 0x888888 });
	  mesh = new THREE.Mesh(geometry, material);
	  scene.add(mesh);

	  ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
	  scene.add(ambientLight);

	  pointLight = new THREE.PointLight(0xffffff, 1, 1000);
	  pointLight.position.set(50, 50, 50);
	  scene.add(pointLight);

	  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	  camera.position.set(0, 200, 200);

	  renderer = new THREE.WebGLRenderer({ antialias: true });
	  renderer.setSize(window.innerWidth, window.innerHeight);

	  THREEx.WindowResize(renderer, camera);

	  document.body.appendChild(renderer.domElement);
	}

	function update() {
	  keyboard.update();
	  // keyboard.debug();

	  if (keyboard.pressed(key.LEFT)) {
	    mesh.position.x -= 2;
	  }
	  if (keyboard.pressed(key.RIGHT)) {
	    mesh.position.x += 2;
	  }
	  if (keyboard.pressed(key.FORWARD)) {
	    mesh.position.z -= 2;
	  }
	  if (keyboard.pressed(key.BACK)) {
	    mesh.position.z += 2;
	  }
	  if (keyboard.pressed(key.UP)) {
	    mesh.position.y += 2;
	  }
	  if (keyboard.pressed(key.DOWN)) {
	    mesh.position.y -= 2;
	  }

	  var campos = mesh.position.clone().add(new THREE.Vector3(0, 100, -200));
	  // camera.position.set(0, 200, 200);
	  camera.lookAt(mesh.position);
	}

	function animate() {
	  requestAnimationFrame(animate);
	  update();
	  renderer.render(scene, camera);
	}

	init();
	animate();

/***/ })
/******/ ]);
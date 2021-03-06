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

	"use strict";

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45;
	var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
	var NEAR = 0.1;
	var FAR = 20000;
	var size = 100;

	var controls = void 0;
	var renderer = void 0;
	var scene = void 0;
	var camera = void 0;

	var origin = new THREE.Vector3(0, 0, 0);

	function renderGridHelper() {
	  var gridHelper = new THREE.GridHelper(size, 10);
	  scene.add(gridHelper);
	}

	function renderAxisHelper() {
	  var axisHelper = new THREE.AxisHelper(size);
	  scene.add(axisHelper);
	}

	function renderArrowHelper() {
	  var arrowDir = new THREE.Vector3(5, 5, 5).normalize();
	  var arrowLength = Math.sqrt(Math.pow(size, 2) + Math.pow(size, 2));
	  var arrowColor = 0xffff00;
	  var headLength = 12;
	  var headWidth = 4;
	  var arrowHelper = new THREE.ArrowHelper(arrowDir, origin, arrowLength, arrowColor, headLength, headWidth);
	  scene.add(arrowHelper);
	}

	function init() {
	  scene = new THREE.Scene();

	  renderGridHelper();
	  renderAxisHelper();
	  renderArrowHelper();

	  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	  camera.position.set(200, 200, 200);
	  camera.lookAt(origin);
	  scene.add(camera);

	  renderer = new THREE.WebGLRenderer({ antialias: true });
	  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

	  controls = new THREE.OrbitControls(camera, renderer.domElement);

	  THREEx.WindowResize(renderer, camera);

	  document.body.appendChild(renderer.domElement);
	}

	function animate() {
	  requestAnimationFrame(animate);
	  controls.update();
	  renderer.render(scene, camera);
	}

	init();
	animate();

/***/ })
/******/ ]);
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
	var NEAR = 1;
	var FAR = 10000;

	var scene = void 0;
	var camera = void 0;
	var renderer = void 0;
	var controls = void 0;

	function init() {
	    scene = new THREE.Scene();

	    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	    camera.position.set(500, 500, 500);

	    var gridHelper = new THREE.GridHelper(500, 10);
	    scene.add(gridHelper);

	    var axisHelper = new THREE.AxisHelper(500);
	    scene.add(axisHelper);

	    var size = 150;
	    var gap = 40;
	    var halfSize = size / 2;

	    var geometry = new THREE.BoxGeometry(size, size, size);
	    var material = new THREE.MeshNormalMaterial({ wireframe: false });

	    var box1 = new THREE.Mesh(geometry, material);
	    box1.position.set(halfSize + 0, halfSize, halfSize + 0);
	    scene.add(box1);

	    var box2 = new THREE.Mesh(geometry, material);
	    box2.position.set(halfSize + size + gap, halfSize, halfSize + 0);
	    scene.add(box2);

	    var box3 = new THREE.Mesh(geometry, material);
	    box3.position.set(halfSize + 0, halfSize, halfSize + size + gap);
	    scene.add(box3);

	    var box4 = new THREE.Mesh(geometry, material);
	    box4.position.set(halfSize + size + gap, halfSize, halfSize + size + gap);
	    scene.add(box4);

	    renderer = new THREE.WebGLRenderer();
	    renderer.setSize(window.innerWidth, window.innerHeight);

	    controls = new THREE.OrbitControls(camera, renderer.domElement);

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
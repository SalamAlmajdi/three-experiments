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

	'use strict';

	// References
	// https://github.com/mrdoob/three.js/tree/master/examples/fonts

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
	var controls = void 0;
	var pointLight = void 0;
	var ambientLight = void 0;

	var fonts = {};
	var origin = new THREE.Vector3(0, 0, 0);
	var fontLoader = new THREE.FontLoader();

	function loadFont(fontId) {
	  return new Promise(function (resolve) {
	    var fontUrl = '../../lib/fonts/fonts/' + fontId + '.typeface.json';
	    fontLoader.load(fontUrl, function (font) {
	      fonts[fontId] = font;
	      resolve();
	    });
	  });
	}

	function load() {
	  return loadFont('helvetiker_regular');
	}

	function init() {
	  scene = new THREE.Scene();

	  axisHelper = new THREE.AxisHelper(100);
	  scene.add(axisHelper);

	  var params = {
	    font: fonts.helvetiker_regular,
	    size: 28,
	    height: 20 };
	  var textGeometry = new THREE.TextGeometry('three', params);
	  var textMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
	  var text = new THREE.Mesh(textGeometry, textMaterial);
	  scene.add(text);

	  ambientLight = new THREE.AmbientLight(0x888888);
	  scene.add(ambientLight);

	  pointLight = new THREE.PointLight(0xffffff, 2, 1000);
	  pointLight.position.set(100, 100, 100);
	  scene.add(pointLight);

	  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	  camera.position.set(200, 0, 200);
	  camera.lookAt(origin);

	  renderer = new THREE.WebGLRenderer({ antialias: true });
	  renderer.setSize(window.innerWidth, window.innerHeight);

	  controls = new THREE.OrbitControls(camera, renderer.domElement);

	  THREEx.WindowResize(renderer, camera);

	  document.body.appendChild(renderer.domElement);
	}

	function animate() {
	  requestAnimationFrame(animate);
	  controls.update();
	  renderer.render(scene, camera);
	}

	load().then(function () {
	  init();
	  animate();
	});

/***/ }
/******/ ]);
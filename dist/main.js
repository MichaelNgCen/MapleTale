/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example_js__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  new (_scripts_example_js__WEBPACK_IMPORTED_MODULE_0___default())(main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBK0MsTUFBTTtFQUNqRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixNQUF4QixDQUFiO0VBRUEsSUFBSUosNERBQUosQ0FBWUcsSUFBWjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgICBuZXcgRXhhbXBsZShtYWluKTtcbn0pOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function() {

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst gravity = 1.5;\n\nclass Player {\n  constructor() {\n    this.postion = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 50;\n    this.height = 50;\n  }\n\n  draw() {\n    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);\n  }\n\n  update() {\n    this.postion.y += this.velocity.y;\n    this.draw();\n    if (this.postion.y + this.height + this.velocity.y <= canvas.height - 140) this.velocity.y += gravity;else this.velocity.y = 0;\n  }\n\n}\n\nconst player = new Player();\nconst keys = {\n  right: {\n    pressed: false\n  },\n  left: {\n    pressed: false\n  }\n};\nplayer.update();\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  player.update();\n  if (keys.right.pressed) player.postion.x += 5;\n  if (keys.left.pressed) player.postion.x -= 5;\n}\n\nanimate();\naddEventListener('keydown', _ref => {\n  let {\n    key\n  } = _ref;\n\n  switch (key) {\n    case \"a\":\n      console.log('left');\n      keys.left.pressed = true;\n      break;\n\n    case \"d\":\n      console.log('right');\n      keys.right.pressed = true;\n      break;\n\n    case \"w\":\n      console.log('up');\n      player.velocity.y = -15;\n      break;\n\n    case \"s\":\n      console.log('down');\n      break;\n  }\n});\naddEventListener('keyup', _ref2 => {\n  let {\n    key\n  } = _ref2;\n\n  switch (key) {\n    case \"a\":\n      console.log('left');\n      keys.left.pressed = false;\n      break;\n\n    case \"d\":\n      console.log('right');\n      keys.right.pressed = false;\n      break;\n\n    case \"w\":\n      console.log('up');\n      player.velocity.y = 0;\n      break;\n\n    case \"s\":\n      console.log('down');\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ3Jhdml0eSIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwicG9zdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJkcmF3IiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJwbGF5ZXIiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXQvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5jb25zdCBncmF2aXR5ID0gMS41O1xuXG5jbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgIHk6IDEwMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zdGlvbi54LCB0aGlzLnBvc3Rpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3N0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgaWYgKHRoaXMucG9zdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPD0gY2FudmFzLmhlaWdodCAtIDE0MCkgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7XG4gICAgICAgIGVsc2UgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICB9XG59XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmNvbnN0IGtleXMgPSB7XG4gICAgcmlnaHQ6IHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgIH0sXG59XG5wbGF5ZXIudXBkYXRlKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBwbGF5ZXIudXBkYXRlKCk7XG5cbiAgICBpZiAoa2V5cy5yaWdodC5wcmVzc2VkKSBwbGF5ZXIucG9zdGlvbi54ICs9IDU7XG4gICAgaWYgKGtleXMubGVmdC5wcmVzc2VkKSBwbGF5ZXIucG9zdGlvbi54IC09IDU7XG59XG5cblxuYW5pbWF0ZSgpO1xuXG5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHtrZXl9KSA9PiB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0Jyk7XG4gICAgICAgICAgICBrZXlzLmxlZnQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgICAgICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IC0xNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pIFxuXG5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7a2V5fSkgPT4ge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgICAgICAgICAga2V5cy5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XG4gICAgICAgICAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3duJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KSAiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsUUFB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\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
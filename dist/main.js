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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  new _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUErQyxNQUFNO0VBQ2pELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWI7RUFFQSxJQUFJSiwyREFBSixDQUFZRyxJQUFaO0FBQ0gsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovL210Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xufSk7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_sprite_sl_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/sprite/sl.png */ \"./src/media/sprite/sl.png\");\n/* harmony import */ var _media_sprite_sl_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_sprite_sl_png__WEBPACK_IMPORTED_MODULE_0__);\n\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst gravity = 1.5;\n\nclass Player {\n  constructor() {\n    this.postion = {\n      x: 40,\n      y: 630\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 66;\n    this.height = 150;\n    this.image = createImage((_media_sprite_sl_png__WEBPACK_IMPORTED_MODULE_0___default()));\n  }\n\n  draw() {\n    ctx.drawImage(this.image, this.postion.x, this.postion.y, this.width, this.height);\n  }\n\n  update() {\n    this.postion.y += this.velocity.y;\n    this.draw();\n    if (this.postion.y + this.height + this.velocity.y <= canvas.height - 140) this.velocity.y += gravity;else this.velocity.y = 0;\n  }\n\n}\n\nclass Platform {\n  constructor(_ref) {\n    let {\n      x,\n      y,\n      width,\n      height\n    } = _ref;\n    this.position = {\n      x,\n      y\n    };\n    this.width = width;\n    this.height = height;\n  }\n\n  draw() {\n    ctx.fillStyle = '';\n    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n\n}\n\nconst player = new Player();\nconst platforms = [new Platform({\n  x: 285,\n  y: 620,\n  width: 100,\n  height: 0\n}), // first haystack\nnew Platform({\n  x: 100,\n  y: 550,\n  width: 140,\n  height: 0\n}), // first edge platform \nnew Platform({\n  x: 100,\n  y: 480,\n  width: 140,\n  height: 0\n}), // second edge platform\nnew Platform({\n  x: 290,\n  y: 410,\n  width: 1200,\n  height: 0\n}), // second floor?\nnew Platform({\n  x: 370,\n  y: 345,\n  width: 100,\n  height: 0\n}), // second haystack\nnew Platform({\n  x: 200,\n  y: 275,\n  width: 140,\n  height: 0\n}), // third edge platform \nnew Platform({\n  x: 200,\n  y: 205,\n  width: 140,\n  height: 0\n}), // fourth edge platform\nnew Platform({\n  x: 390,\n  y: 135,\n  width: 1200,\n  height: 0\n}), // third floor?\nnew Platform({\n  x: 460,\n  y: 65,\n  width: 100,\n  height: 0\n}), // third haystack\nnew Platform({\n  x: 300,\n  y: 0,\n  width: 140,\n  height: 0\n}), // fifth edge platform\nnew Platform({\n  x: 1400,\n  y: 65,\n  width: 100,\n  height: 0\n}) // fourth haystack?\n];\nconst keys = {\n  right: {\n    pressed: false\n  },\n  left: {\n    pressed: false\n  }\n}; // player.update();\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  player.update();\n  platforms.forEach(platform => platform.draw());\n  if (keys.right.pressed) player.postion.x += 5;\n  if (keys.left.pressed) player.postion.x -= 5;\n  platforms.forEach(platform => {\n    if (player.postion.y + player.height <= platform.position.y && player.postion.y + player.height + player.velocity.y >= platform.position.y && player.postion.x + player.width >= platform.position.x && player.postion.x <= platform.position.x + platform.width) player.velocity.y = 0;\n  });\n}\n\nanimate();\naddEventListener('keydown', _ref2 => {\n  let {\n    key\n  } = _ref2;\n\n  switch (key) {\n    case \"a\":\n      console.log('left');\n      keys.left.pressed = true;\n      break;\n\n    case \"d\":\n      console.log('right');\n      keys.right.pressed = true;\n      break;\n\n    case \"w\":\n      console.log('up');\n      player.velocity.y = -20;\n      break;\n\n    case \"s\":\n      console.log('down');\n      break;\n  }\n});\naddEventListener('keyup', _ref3 => {\n  let {\n    key\n  } = _ref3;\n\n  switch (key) {\n    case \"a\":\n      console.log('left');\n      keys.left.pressed = false;\n      break;\n\n    case \"d\":\n      console.log('right');\n      keys.right.pressed = false;\n      break;\n\n    case \"w\":\n      console.log('up');\n      player.velocity.y = 0;\n      break;\n\n    case \"s\":\n      console.log('down');\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO01BQ0FaLElBQUksQ0FBQ0csSUFBTCxDQUFVRCxPQUFWLEdBQW9CLEtBQXBCO01BQ0E7O0lBQ0osS0FBSyxHQUFMO01BQ0lTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7TUFDQVosSUFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsS0FBckI7TUFDQTs7SUFDSixLQUFLLEdBQUw7TUFDSVMsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtNQUNBZCxNQUFNLENBQUNWLFFBQVAsQ0FBZ0JELENBQWhCLEdBQW9CLENBQXBCO01BQ0E7O0lBQ0osS0FBSyxHQUFMO01BQ0l3QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO01BQ0E7RUFmUjtBQWlCSCxDQWxCZSxDQUFoQiIsInNvdXJjZXMiOlsid2VicGFjazovL210Ly4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFuZGluZ0xlZnQgZnJvbSAnLi4vbWVkaWEvc3ByaXRlL3NsLnBuZydcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5jb25zdCBncmF2aXR5ID0gMS41O1xuXG5jbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgeTogNjMwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IDY2O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDE1MDtcblxuICAgICAgICB0aGlzLmltYWdlID0gY3JlYXRlSW1hZ2Uoc3RhbmRpbmdMZWZ0KTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc3Rpb24ueCwgdGhpcy5wb3N0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIGlmICh0aGlzLnBvc3Rpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IGNhbnZhcy5oZWlnaHQgLSAxNDApIHRoaXMudmVsb2NpdHkueSArPSBncmF2aXR5O1xuICAgICAgICBlbHNlIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgfVxufVxuXG5jbGFzcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3Ioe3gsIHksIHdpZHRoLCBoZWlnaHR9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmNvbnN0IHBsYXRmb3JtcyA9IFtuZXcgUGxhdGZvcm0oe3g6Mjg1LCB5OiA2MjAsIHdpZHRoOiAxMDAsIGhlaWdodDogMH0pLCAvLyBmaXJzdCBoYXlzdGFja1xuICAgIG5ldyBQbGF0Zm9ybSh7eDoxMDAsIHk6IDU1MCwgd2lkdGg6IDE0MCwgaGVpZ2h0OiAwfSksIC8vIGZpcnN0IGVkZ2UgcGxhdGZvcm0gXG4gICAgbmV3IFBsYXRmb3JtKHt4OjEwMCwgeTogNDgwLCB3aWR0aDogMTQwLCBoZWlnaHQ6IDB9KSwgLy8gc2Vjb25kIGVkZ2UgcGxhdGZvcm1cbiAgICBuZXcgUGxhdGZvcm0oe3g6MjkwLCB5OiA0MTAsIHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDB9KSwgLy8gc2Vjb25kIGZsb29yP1xuICAgIG5ldyBQbGF0Zm9ybSh7eDozNzAsIHk6IDM0NSwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAwfSksIC8vIHNlY29uZCBoYXlzdGFja1xuICAgIG5ldyBQbGF0Zm9ybSh7eDoyMDAsIHk6IDI3NSwgd2lkdGg6IDE0MCwgaGVpZ2h0OiAwfSksIC8vIHRoaXJkIGVkZ2UgcGxhdGZvcm0gXG4gICAgbmV3IFBsYXRmb3JtKHt4OjIwMCwgeTogMjA1LCB3aWR0aDogMTQwLCBoZWlnaHQ6IDB9KSwgLy8gZm91cnRoIGVkZ2UgcGxhdGZvcm1cbiAgICBuZXcgUGxhdGZvcm0oe3g6MzkwLCB5OiAxMzUsIHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDB9KSwgLy8gdGhpcmQgZmxvb3I/XG4gICAgbmV3IFBsYXRmb3JtKHt4OjQ2MCwgeTogNjUsIHdpZHRoOiAxMDAsIGhlaWdodDogMH0pLCAvLyB0aGlyZCBoYXlzdGFja1xuICAgIG5ldyBQbGF0Zm9ybSh7eDozMDAsIHk6IDAsIHdpZHRoOiAxNDAsIGhlaWdodDogMH0pLCAvLyBmaWZ0aCBlZGdlIHBsYXRmb3JtXG4gICAgbmV3IFBsYXRmb3JtKHt4OjE0MDAsIHk6IDY1LCB3aWR0aDogMTAwLCBoZWlnaHQ6IDB9KSAvLyBmb3VydGggaGF5c3RhY2s/XG5dOyBcblxuY29uc3Qga2V5cyA9IHtcbiAgICByaWdodDoge1xuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgfSxcbn1cbi8vIHBsYXllci51cGRhdGUoKTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHBsYXllci51cGRhdGUoKTtcbiAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiBwbGF0Zm9ybS5kcmF3KCkpO1xuICAgIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQpIHBsYXllci5wb3N0aW9uLnggKz0gNTtcbiAgICBpZiAoa2V5cy5sZWZ0LnByZXNzZWQpIHBsYXllci5wb3N0aW9uLnggLT0gNTtcbiAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgaWYgKHBsYXllci5wb3N0aW9uLnkgKyBwbGF5ZXIuaGVpZ2h0IDw9IHBsYXRmb3JtLnBvc2l0aW9uLnkgJiYgcGxheWVyLnBvc3Rpb24ueSArIHBsYXllci5oZWlnaHQrcGxheWVyLnZlbG9jaXR5LnkgPj0gcGxhdGZvcm0ucG9zaXRpb24ueSAmJiBwbGF5ZXIucG9zdGlvbi54ICsgcGxheWVyLndpZHRoID49IHBsYXRmb3JtLnBvc2l0aW9uLnggJiYgcGxheWVyLnBvc3Rpb24ueCA8PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICsgcGxhdGZvcm0ud2lkdGgpIHBsYXllci52ZWxvY2l0eS55ID0gMDtcbiAgICB9KVxufVxuXG5cbmFuaW1hdGUoKTtcblxuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7a2V5fSkgPT4ge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgICAgICAgICAga2V5cy5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHQnKTtcbiAgICAgICAgICAgIGtleXMucmlnaHQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cCcpO1xuICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAtMjA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3duJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KSBcblxuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoe2tleX0pID0+IHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgICAgICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cCcpO1xuICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSkgIl0sIm5hbWVzIjpbInN0YW5kaW5nTGVmdCIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvc3Rpb24iLCJ4IiwieSIsInZlbG9jaXR5IiwiaW1hZ2UiLCJjcmVhdGVJbWFnZSIsImRyYXciLCJkcmF3SW1hZ2UiLCJ1cGRhdGUiLCJQbGF0Zm9ybSIsInBvc2l0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwbGF5ZXIiLCJwbGF0Zm9ybXMiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGxhdGZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwia2V5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/media/sprite/sl.png":
/*!*********************************!*\
  !*** ./src/media/sprite/sl.png ***!
  \*********************************/
/***/ (function() {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

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
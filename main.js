/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutItems: () => (/* binding */ aboutItems)\n/* harmony export */ });\nconst aboutItems = document.createElement(\"div\");\naboutItems.innerHTML = \"<h2>We are about shit</h2><ul><li>Pizza</li><li>Pasta</li><li>Salad</li></ul>\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWJvdXRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hYm91dEl0ZW1zLmlubmVySFRNTCA9IFwiPGgyPldlIGFyZSBhYm91dCBzaGl0PC9oMj48dWw+PGxpPlBpenphPC9saT48bGk+UGFzdGE8L2xpPjxsaT5TYWxhZDwvbGk+PC91bD5cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeItems: () => (/* binding */ homeItems)\n/* harmony export */ });\nconst homeItems = document.createElement(\"div\");\nhomeItems.innerHTML = \"<h2>Our Home is nice</h2><ul><li>Pizza</li><li>Pasta</li><li>Salad</li></ul>\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhvbWVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ob21lSXRlbXMuaW5uZXJIVE1MID0gXCI8aDI+T3VyIEhvbWUgaXMgbmljZTwvaDI+PHVsPjxsaT5QaXp6YTwvbGk+PGxpPlBhc3RhPC9saT48bGk+U2FsYWQ8L2xpPjwvdWw+XCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const content = document.getElementById(\"content\");\n    \n    // Populate the content with menuItems by default\n    content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuItems);\n\n    const menuButton = document.getElementById(\"menuButton\");\n\n    menuButton.addEventListener(\"click\", () => {\n        // Optionally, you can clear the content before adding the menu items\n        content.innerHTML = '';  // Clear previous content\n        content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuItems);\n    });\n\n    const homeButton = document.getElementById(\"homeButton\");\n\n    homeButton.addEventListener(\"click\", () => {\n        // Optionally, you can clear the content before adding the menu items\n        content.innerHTML = '';  // Clear previous content\n        content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homeItems);\n    });\n\n    const aboutButton = document.getElementById(\"aboutButton\");\n\n    aboutButton.addEventListener(\"click\", () => {\n        // Optionally, you can clear the content before adding the menu items\n        content.innerHTML = '';  // Clear previous content\n        content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutItems);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFzQztBQUNBO0FBQ0U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFTOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDRCQUE0QiwrQ0FBUztBQUNyQyxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNEJBQTRCLCtDQUFTO0FBQ3JDLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw0QkFBNEIsaURBQVU7QUFDdEMsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBob21lSXRlbXMgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBhYm91dEl0ZW1zIH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIFxuICAgIC8vIFBvcHVsYXRlIHRoZSBjb250ZW50IHdpdGggbWVudUl0ZW1zIGJ5IGRlZmF1bHRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnV0dG9uXCIpO1xuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBPcHRpb25hbGx5LCB5b3UgY2FuIGNsZWFyIHRoZSBjb250ZW50IGJlZm9yZSBhZGRpbmcgdGhlIG1lbnUgaXRlbXNcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJzsgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZUJ1dHRvblwiKTtcblxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgeW91IGNhbiBjbGVhciB0aGUgY29udGVudCBiZWZvcmUgYWRkaW5nIHRoZSBtZW51IGl0ZW1zXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7ICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUl0ZW1zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dEJ1dHRvblwiKTtcblxuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIE9wdGlvbmFsbHksIHlvdSBjYW4gY2xlYXIgdGhlIGNvbnRlbnQgYmVmb3JlIGFkZGluZyB0aGUgbWVudSBpdGVtc1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnOyAgLy8gQ2xlYXIgcHJldmlvdXMgY29udGVudFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0SXRlbXMpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuItems: () => (/* binding */ menuItems)\n/* harmony export */ });\nconst menuItems = document.createElement(\"div\");\nmenuItems.classList.add(\"menu\");\n\nconst menuTitle = document.createElement(\"h2\");\nmenuTitle.textContent = \"Our Delicious Menu\";\nmenuItems.appendChild(menuTitle);\n\n// Create a list of menu items\nconst menuList = document.createElement(\"ul\");\n\nconst menuItem1 = document.createElement(\"li\");\nconst itemTitle1 = document.createElement(\"h3\");\nitemTitle1.textContent = \"Pizza\";\nconst itemDescription1 = document.createElement(\"p\");\nitemDescription1.textContent = \"A delicious pizza with fresh ingredients!\";\nconst itemButton1 = document.createElement(\"button\");\nitemButton1.textContent = \"Order Now\";\nitemButton1.addEventListener(\"click\", () => {\n    alert(\"Pizza added to your order!\");\n});\n\nmenuItem1.appendChild(itemTitle1);\nmenuItem1.appendChild(itemDescription1);\nmenuItem1.appendChild(itemButton1);\nmenuList.appendChild(menuItem1);\n\n// Repeat for more menu items\nconst menuItem2 = document.createElement(\"li\");\nconst itemTitle2 = document.createElement(\"h3\");\nitemTitle2.textContent = \"Pasta\";\nconst itemDescription2 = document.createElement(\"p\");\nitemDescription2.textContent = \"Freshly made pasta with a creamy sauce!\";\nconst itemButton2 = document.createElement(\"button\");\nitemButton2.textContent = \"Order Now\";\nitemButton2.addEventListener(\"click\", () => {\n    alert(\"Pasta added to your order!\");\n});\n\nmenuItem2.appendChild(itemTitle2);\nmenuItem2.appendChild(itemDescription2);\nmenuItem2.appendChild(itemButton2);\nmenuList.appendChild(menuItem2);\n\n// Append the menu list to the menu container\nmenuItems.appendChild(menuList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xubWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgRGVsaWNpb3VzIE1lbnVcIjtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4vLyBDcmVhdGUgYSBsaXN0IG9mIG1lbnUgaXRlbXNcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG5jb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5jb25zdCBpdGVtVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuaXRlbVRpdGxlMS50ZXh0Q29udGVudCA9IFwiUGl6emFcIjtcbmNvbnN0IGl0ZW1EZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbml0ZW1EZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPSBcIkEgZGVsaWNpb3VzIHBpenphIHdpdGggZnJlc2ggaW5ncmVkaWVudHMhXCI7XG5jb25zdCBpdGVtQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5pdGVtQnV0dG9uMS50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG5pdGVtQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFsZXJ0KFwiUGl6emEgYWRkZWQgdG8geW91ciBvcmRlciFcIik7XG59KTtcblxubWVudUl0ZW0xLmFwcGVuZENoaWxkKGl0ZW1UaXRsZTEpO1xubWVudUl0ZW0xLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbjEpO1xubWVudUl0ZW0xLmFwcGVuZENoaWxkKGl0ZW1CdXR0b24xKTtcbm1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG5cbi8vIFJlcGVhdCBmb3IgbW9yZSBtZW51IGl0ZW1zXG5jb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5jb25zdCBpdGVtVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuaXRlbVRpdGxlMi50ZXh0Q29udGVudCA9IFwiUGFzdGFcIjtcbmNvbnN0IGl0ZW1EZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbml0ZW1EZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSBcIkZyZXNobHkgbWFkZSBwYXN0YSB3aXRoIGEgY3JlYW15IHNhdWNlIVwiO1xuY29uc3QgaXRlbUJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuaXRlbUJ1dHRvbjIudGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuaXRlbUJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhbGVydChcIlBhc3RhIGFkZGVkIHRvIHlvdXIgb3JkZXIhXCIpO1xufSk7XG5cbm1lbnVJdGVtMi5hcHBlbmRDaGlsZChpdGVtVGl0bGUyKTtcbm1lbnVJdGVtMi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24yKTtcbm1lbnVJdGVtMi5hcHBlbmRDaGlsZChpdGVtQnV0dG9uMik7XG5tZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTIpO1xuXG4vLyBBcHBlbmQgdGhlIG1lbnUgbGlzdCB0byB0aGUgbWVudSBjb250YWluZXJcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
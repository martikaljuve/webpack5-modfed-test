System.register(["app2"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_webpack_container_reference_app2__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_webpack_container_reference_app2__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_webpack_container_reference_app2__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

console.log("__webpack_share_scopes__", __webpack_require__.S);

// NOTE: For debugging.
window.webpackShareScopes = __webpack_require__.S;
function createGet(importName) {
  return () => System.import(importName).then(Module => () => Module);
}
function hack() {
  console.log("Filling share scope manually.");
  __webpack_require__.S.default = {
    react: {
      "18.2.0": {
        from: "app-externals",
        eager: false,
        get: createGet("react")
      }
    },
    "react-dom": {
      "18.2.0": {
        from: "app-externals",
        eager: false,
        get: createGet("react-dom")
      }
    },
    "styled-components": {
      "5.3.6": {
        from: "app-externals",
        eager: false,
        get: createGet("styled-components")
      }
    }
  };
}
hack();
__webpack_require__.e(/*! import() */ "src_bootstrap_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ "./src/bootstrap.jsx"));

/***/ }),

/***/ "webpack/container/reference/app2":
/*!***********************!*\
  !*** external "app2" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_webpack_container_reference_app2__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ return __webpack_exports__;
/******/ }
])
			);
		}
	};
});
//# sourceMappingURL=main.js.map
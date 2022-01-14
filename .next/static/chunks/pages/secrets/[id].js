/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/secrets/[id]"],{

/***/ "./pages/components/SecretLink.js":
/*!****************************************!*\
  !*** ./pages/components/SecretLink.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecretLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_secretAtoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/secretAtoms */ \"./pages/components/atoms/secretAtoms.js\");\n/* harmony import */ var _atoms_passwordAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atoms/passwordAtom */ \"./pages/components/atoms/passwordAtom.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SecretLink(param) {\n    var id = param.id;\n    _s();\n    var timeValue = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_secretAtoms__WEBPACK_IMPORTED_MODULE_3__.timeState);\n    var passwordValue = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_passwordAtom__WEBPACK_IMPORTED_MODULE_4__.passwordState);\n    // console.log(passwordValue)\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"secret-link\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \" http://localhost:3000/private/\",\n                        id\n                    ]\n                })\n            }),\n            passwordValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"This Secret requires Passphrase\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"secret-expire-time\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h4\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Expires in \",\n                        timeValue,\n                        \".\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(SecretLink, \"s5TjqaCqHSKXXvsACNlxXHdnfLI=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SecretLink;\nvar _c;\n$RefreshReg$(_c, \"SecretLink\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlY3JldExpbmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNVO0FBQ0Y7QUFDSzs7QUFHckMsUUFBUSxDQUFDSyxVQUFVLENBQUMsS0FBTSxFQUFFLENBQUM7UUFBUEMsRUFBRSxHQUFKLEtBQU0sQ0FBSkEsRUFBRTs7SUFDckMsR0FBSyxDQUFDQyxTQUFTLEdBQUdOLHNEQUFjLENBQUNFLHlEQUFTO0lBQzFDLEdBQUssQ0FBQ0ssYUFBYSxHQUFHUCxzREFBYyxDQUFDRyw4REFBYTtJQUNsRCxFQUE2QjtJQUU3QixHQUFLLENBQUNLLE1BQU0sR0FBR1Qsc0RBQVM7SUFFeEIsTUFBTTs7aUZBRURVLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7O2dHQUN6QkMsQ0FBQzs7Ozs7Ozs7d0JBQUMsQ0FBK0I7d0JBQUNOLEVBQUU7Ozs7WUFFdENFLGFBQWEseUVBQ1hJLENBQUM7Ozs7Ozs7MEJBQUMsQ0FBK0I7O2lGQUVuQ0YsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW9COzs7Ozs7O2dHQUNoQ0UsQ0FBRTs7Ozs7Ozs7d0JBQUMsQ0FBVzt3QkFBQ04sU0FBUzt3QkFBQyxDQUFDOzs7O2lGQUU1QkcsQ0FBRzs7Ozs7Ozs7OztBQUlWLENBQUM7R0F0QnVCTCxVQUFVOztRQUNkSixrREFBYztRQUNWQSxrREFBYztRQUdyQkQsa0RBQVM7OztLQUxGSyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU2VjcmV0TGluay5qcz80Y2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgc2VsZWN0b3IgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IHRpbWVTdGF0ZSB9IGZyb20gXCIuL2F0b21zL3NlY3JldEF0b21zXCI7XHJcbmltcG9ydCB7IHBhc3N3b3JkU3RhdGUgfSBmcm9tIFwiLi9hdG9tcy9wYXNzd29yZEF0b21cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWNyZXRMaW5rKHsgaWQgfSkge1xyXG4gIGNvbnN0IHRpbWVWYWx1ZSA9IHVzZVJlY29pbFZhbHVlKHRpbWVTdGF0ZSk7XHJcbiAgY29uc3QgcGFzc3dvcmRWYWx1ZSA9IHVzZVJlY29pbFZhbHVlKHBhc3N3b3JkU3RhdGUpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhc3N3b3JkVmFsdWUpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjcmV0LWxpbmtcIj5cclxuICAgICAgICA8cD4gaHR0cDovL2xvY2FsaG9zdDozMDAwL3ByaXZhdGUve2lkfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwYXNzd29yZFZhbHVlICYmIChcclxuICAgICAgICA8cD5UaGlzIFNlY3JldCByZXF1aXJlcyBQYXNzcGhyYXNlPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldC1leHBpcmUtdGltZVwiPlxyXG4gICAgICAgIDxoND5FeHBpcmVzIGluIHt0aW1lVmFsdWV9LjwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFZhbHVlIiwic2VsZWN0b3IiLCJ0aW1lU3RhdGUiLCJwYXNzd29yZFN0YXRlIiwiU2VjcmV0TGluayIsImlkIiwidGltZVZhbHVlIiwicGFzc3dvcmRWYWx1ZSIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SecretLink.js\n");

/***/ }),

/***/ "./pages/components/atoms/passwordAtom.js":
/*!************************************************!*\
  !*** ./pages/components/atoms/passwordAtom.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordState\": function() { return /* binding */ passwordState; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar passwordState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"passwordState\",\n    default: \"\"\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3Bhc3N3b3JkQXRvbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFFdEIsR0FBSyxDQUFDQyxhQUFhLEdBQUdELDRDQUFJLENBQUMsQ0FBQztJQUNqQ0UsR0FBRyxFQUFFLENBQWU7SUFDcEJDLE9BQU8sRUFBRSxDQUFFO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3Bhc3N3b3JkQXRvbS5qcz82MjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogXCJwYXNzd29yZFN0YXRlXCIsXHJcbiAgZGVmYXVsdDogXCJcIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwicGFzc3dvcmRTdGF0ZSIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/atoms/passwordAtom.js\n");

/***/ }),

/***/ "./pages/components/atoms/secretAtoms.js":
/*!***********************************************!*\
  !*** ./pages/components/atoms/secretAtoms.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeState\": function() { return /* binding */ timeState; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar timeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"timeState\",\n    default: \"5 minutes\"\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3NlY3JldEF0b21zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QjtBQUV0QixHQUFLLENBQUNDLFNBQVMsR0FBR0QsNENBQUksQ0FBQyxDQUFDO0lBQzdCRSxHQUFHLEVBQUUsQ0FBVztJQUNoQkMsT0FBTyxFQUFFLENBQVc7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3NlY3JldEF0b21zLmpzPzZmNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lU3RhdGUgPSBhdG9tKHtcclxuICBrZXk6IFwidGltZVN0YXRlXCIsXHJcbiAgZGVmYXVsdDogXCI1IG1pbnV0ZXNcIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwidGltZVN0YXRlIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/atoms/secretAtoms.js\n");

/***/ }),

/***/ "./pages/secrets/[id].js":
/*!*******************************!*\
  !*** ./pages/secrets/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ SecretPageLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SecretLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SecretLink */ \"./pages/components/SecretLink.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar __N_SSP = true;\nfunction SecretPageLink(param) {\n    var id = param.id;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-start mt-5 mb-3\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Share this link\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SecretLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: id,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n};\n_c = SecretPageLink;\nvar _c;\n$RefreshReg$(_c, \"SecretPageLink\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWNyZXRzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDs7QUFFbEMsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBTSxFQUFFLENBQUM7UUFBUEMsRUFBRSxHQUFKLEtBQU0sQ0FBSkEsRUFBRTtJQUN6QyxNQUFNO3dGQUVEQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztxRkFDdkJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7OzttR0FDbENDLENBQUU7Ozs7Ozs7a0NBQUMsQ0FBZTs7O3FGQUVwQkwsOERBQVU7b0JBQUNFLEVBQUUsRUFBRUEsRUFBRTs7Ozs7Ozs7Ozs7QUFJMUIsQ0FBQztLQVh1QkQsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWNyZXRzL1tpZF0uanM/YTZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjcmV0TGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWNyZXRMaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWNyZXRQYWdlTGluayh7IGlkIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbXQtNSBtYi0zXCI+ICAgICAgICAgIFxyXG4gICAgICAgICAgPGgzPlNoYXJlIHRoaXMgbGluazwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNlY3JldExpbmsgaWQ9e2lkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgaWQgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTZWNyZXRMaW5rIiwiU2VjcmV0UGFnZUxpbmsiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/secrets/[id].js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsecrets%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CMerina%20Dhougoda%5CDesktop%5Cnode-secret-sharing%5Cpages%5Csecrets%5C%5Bid%5D.js!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsecrets%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CMerina%20Dhougoda%5CDesktop%5Cnode-secret-sharing%5Cpages%5Csecrets%5C%5Bid%5D.js! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/secrets/[id]\",\n      function () {\n        return __webpack_require__(/*! ./pages/secrets/[id].js */ \"./pages/secrets/[id].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/secrets/[id]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZzZWNyZXRzJTJGJTVCaWQlNUQmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNNZXJpbmElMjBEaG91Z29kYSU1Q0Rlc2t0b3AlNUNub2RlLXNlY3JldC1zaGFyaW5nJTVDcGFnZXMlNUNzZWNyZXRzJTVDJTVCaWQlNUQuanMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0RBQXlCO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz85ZDc4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvc2VjcmV0cy9baWRdXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9zZWNyZXRzL1tpZF0uanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL3NlY3JldHMvW2lkXVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsecrets%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CMerina%20Dhougoda%5CDesktop%5Cnode-secret-sharing%5Cpages%5Csecrets%5C%5Bid%5D.js!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsecrets%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CMerina%20Dhougoda%5CDesktop%5Cnode-secret-sharing%5Cpages%5Csecrets%5C%5Bid%5D.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
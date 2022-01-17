"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/secrets/[id]";
exports.ids = ["pages/secrets/[id]"];
exports.modules = {

/***/ "./pages/components/SecretLink.js":
/*!****************************************!*\
  !*** ./pages/components/SecretLink.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SecretLink)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_secretAtoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/secretAtoms */ \"./pages/components/atoms/secretAtoms.js\");\n/* harmony import */ var _atoms_passwordAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atoms/passwordAtom */ \"./pages/components/atoms/passwordAtom.js\");\n\n\n\n\n\nfunction SecretLink({ id  }) {\n    const timeValue = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_secretAtoms__WEBPACK_IMPORTED_MODULE_3__.timeState);\n    const passwordValue = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_passwordAtom__WEBPACK_IMPORTED_MODULE_4__.passwordState);\n    // console.log(passwordValue)\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"secret-link\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \" http://localhost:3000/private/\",\n                        id\n                    ]\n                })\n            }),\n            passwordValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 18,\n                    columnNumber: 25\n                },\n                __self: this,\n                children: \"This Secret requires Passphrase\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"secret-expire-time\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h4\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Expires in \",\n                        timeValue,\n                        \".\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\components\\\\SecretLink.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlY3JldExpbmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNVO0FBQ0Y7QUFDSztBQUVyQyxRQUFRLENBQUNLLFVBQVUsQ0FBQyxDQUFDLENBQUNDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxLQUFLLENBQUNDLFNBQVMsR0FBR04sc0RBQWMsQ0FBQ0UseURBQVM7SUFDMUMsS0FBSyxDQUFDSyxhQUFhLEdBQUdQLHNEQUFjLENBQUNHLDhEQUFhO0lBQ2xELEVBQTZCO0lBRTdCLEtBQUssQ0FBQ0ssTUFBTSxHQUFHVCxzREFBUztJQUV4QixNQUFNOztpRkFFRFUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Z0dBQ3pCQyxDQUFDOzs7Ozs7Ozt3QkFBQyxDQUErQjt3QkFBQ04sRUFBRTs7OztZQUV0Q0UsYUFBYSx5RUFBS0ksQ0FBQzs7Ozs7OzswQkFBQyxDQUErQjs7aUZBQ25ERixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBb0I7Ozs7Ozs7Z0dBQ2hDRSxDQUFFOzs7Ozs7Ozt3QkFBQyxDQUFXO3dCQUFDTixTQUFTO3dCQUFDLENBQUM7Ozs7aUZBRTVCRyxDQUFHOzs7Ozs7Ozs7O0FBR1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlY3JldC1zaGFyaW5nLWFwcC8uL3BhZ2VzL2NvbXBvbmVudHMvU2VjcmV0TGluay5qcz80Y2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgc2VsZWN0b3IgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IHRpbWVTdGF0ZSB9IGZyb20gXCIuL2F0b21zL3NlY3JldEF0b21zXCI7XHJcbmltcG9ydCB7IHBhc3N3b3JkU3RhdGUgfSBmcm9tIFwiLi9hdG9tcy9wYXNzd29yZEF0b21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3JldExpbmsoeyBpZCB9KSB7XHJcbiAgY29uc3QgdGltZVZhbHVlID0gdXNlUmVjb2lsVmFsdWUodGltZVN0YXRlKTtcclxuICBjb25zdCBwYXNzd29yZFZhbHVlID0gdXNlUmVjb2lsVmFsdWUocGFzc3dvcmRTdGF0ZSk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFzc3dvcmRWYWx1ZSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldC1saW5rXCI+XHJcbiAgICAgICAgPHA+IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcml2YXRlL3tpZH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cGFzc3dvcmRWYWx1ZSAmJiA8cD5UaGlzIFNlY3JldCByZXF1aXJlcyBQYXNzcGhyYXNlPC9wPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNyZXQtZXhwaXJlLXRpbWVcIj5cclxuICAgICAgICA8aDQ+RXhwaXJlcyBpbiB7dGltZVZhbHVlfS48L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFZhbHVlIiwic2VsZWN0b3IiLCJ0aW1lU3RhdGUiLCJwYXNzd29yZFN0YXRlIiwiU2VjcmV0TGluayIsImlkIiwidGltZVZhbHVlIiwicGFzc3dvcmRWYWx1ZSIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SecretLink.js\n");

/***/ }),

/***/ "./pages/components/atoms/passwordAtom.js":
/*!************************************************!*\
  !*** ./pages/components/atoms/passwordAtom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordState\": () => (/* binding */ passwordState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst passwordState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"passwordState\",\n    default: \"\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3Bhc3N3b3JkQXRvbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFFdEIsS0FBSyxDQUFDQyxhQUFhLEdBQUdELDRDQUFJLENBQUMsQ0FBQztJQUNqQ0UsR0FBRyxFQUFFLENBQWU7SUFDcEJDLE9BQU8sRUFBRSxDQUFFO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlY3JldC1zaGFyaW5nLWFwcC8uL3BhZ2VzL2NvbXBvbmVudHMvYXRvbXMvcGFzc3dvcmRBdG9tLmpzPzYyMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcInBhc3N3b3JkU3RhdGVcIixcclxuICBkZWZhdWx0OiBcIlwiLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJwYXNzd29yZFN0YXRlIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/atoms/passwordAtom.js\n");

/***/ }),

/***/ "./pages/components/atoms/secretAtoms.js":
/*!***********************************************!*\
  !*** ./pages/components/atoms/secretAtoms.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeState\": () => (/* binding */ timeState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst timeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"timeState\",\n    default: \"5 minutes\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F0b21zL3NlY3JldEF0b21zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QjtBQUV0QixLQUFLLENBQUNDLFNBQVMsR0FBR0QsNENBQUksQ0FBQyxDQUFDO0lBQzdCRSxHQUFHLEVBQUUsQ0FBVztJQUNoQkMsT0FBTyxFQUFFLENBQVc7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlY3JldC1zaGFyaW5nLWFwcC8uL3BhZ2VzL2NvbXBvbmVudHMvYXRvbXMvc2VjcmV0QXRvbXMuanM/NmY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogXCJ0aW1lU3RhdGVcIixcclxuICBkZWZhdWx0OiBcIjUgbWludXRlc1wiLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJ0aW1lU3RhdGUiLCJrZXkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/atoms/secretAtoms.js\n");

/***/ }),

/***/ "./pages/secrets/[id].js":
/*!*******************************!*\
  !*** ./pages/secrets/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SecretPageLink),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SecretLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SecretLink */ \"./pages/components/SecretLink.js\");\n\n\nfunction SecretPageLink({ id  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-start mt-5 mb-3\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Share this link\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SecretLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: id,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Merina Dhougoda\\\\Desktop\\\\node-secret-sharing\\\\pages\\\\secrets\\\\[id].js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n};\nasync function getServerSideProps(context) {\n    const { id  } = context.query;\n    return {\n        props: {\n            id\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWNyZXRzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBRWxDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU07d0ZBRURDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O3FGQUN2QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7O21HQUNsQ0MsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFlOzs7cUZBRXBCTCw4REFBVTtvQkFBQ0UsRUFBRSxFQUFFQSxFQUFFOzs7Ozs7Ozs7OztBQUkxQixDQUFDO0FBQ00sZUFBZUksa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQyxDQUFDLENBQUNMLEVBQUUsRUFBQyxDQUFDLEdBQUdLLE9BQU8sQ0FBQ0MsS0FBSztJQUM1QixNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUFDUCxFQUFFO1FBQUMsQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VjcmV0LXNoYXJpbmctYXBwLy4vcGFnZXMvc2VjcmV0cy9baWRdLmpzP2E2YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3JldExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjcmV0TGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjcmV0UGFnZUxpbmsoeyBpZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IG10LTUgbWItM1wiPlxyXG4gICAgICAgICAgPGgzPlNoYXJlIHRoaXMgbGluazwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNlY3JldExpbmsgaWQ9e2lkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgaWQgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTZWNyZXRMaW5rIiwiU2VjcmV0UGFnZUxpbmsiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/secrets/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/secrets/[id].js"));
module.exports = __webpack_exports__;

})();
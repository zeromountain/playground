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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate , text: text1 = '' , id =undefined  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text, id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text1,\n                placeholder: \"내용을 입력하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgInput.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgInput.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgInput.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUU5QixLQUFLLENBQUNDLFFBQVEsSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsSUFBSSxFQUFKQSxLQUFJLEdBQUcsQ0FBRSxJQUFFQyxFQUFFLEVBQUdDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMzRCxLQUFLLENBQUNDLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBRTNCLEtBQUssQ0FBQ08sUUFBUSxJQUFHQyxDQUFDLEdBQUksQ0FBQztRQUNyQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCRCxDQUFDLENBQUNFLGVBQWU7UUFDakIsS0FBSyxDQUFDUCxJQUFJLEdBQUdHLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO1FBQ2xDTixPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLENBQUU7UUFDMUJWLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxFQUFFO0lBQ2pCLENBQUM7SUFFRCxNQUFNLDZFQUNIUyxDQUFJO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjtRQUFDUCxRQUFRLEVBQUVBLFFBQVE7O3dGQUNqRFEsQ0FBUTtnQkFDUEMsR0FBRyxFQUFFVixPQUFPO2dCQUNaVyxZQUFZLEVBQUVkLEtBQUk7Z0JBQ2xCZSxXQUFXLEVBQUMsQ0FBWTs7Ozs7O3dGQUVUQyxDQUFWO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUTswQkFBQyxDQUFFOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlbkIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByZWY9e3RleHRSZWZ9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nconst MsgItem = ({ id , userId , timestamp , text , onUpdate , onDelete , isEditing , startEdit ,  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    ' ',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString('ko-KR', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false) : text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgItem.js\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFakMsS0FBSyxDQUFDQyxPQUFPLElBQUksQ0FBQyxDQUNoQkMsRUFBRSxHQUNGQyxNQUFNLEdBQ05DLFNBQVMsR0FDVEMsSUFBSSxHQUNKQyxRQUFRLEdBQ1JDLFFBQVEsR0FDUkMsU0FBUyxHQUNUQyxTQUFTLElBQ1gsQ0FBQywrRUFDRUMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O3dGQUMzQkMsQ0FBRTs7b0JBQ0FULE1BQU07b0JBQUUsQ0FBRztnR0FDWFUsQ0FBRztrQ0FDRCxHQUFHLENBQUNDLElBQUksQ0FBQ1YsU0FBUyxFQUFFVyxjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7NEJBQzVDQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O1lBSUpiLFNBQVM7c0dBRUxSLGlEQUFRO29CQUFDc0IsTUFBTSxFQUFFaEIsUUFBUTtvQkFBRUQsSUFBSSxFQUFFQSxJQUFJO29CQUFFSCxFQUFFLEVBQUVBLEVBQUU7Ozs7OztnQ0FHaERHLElBQUk7d0ZBR0xrQixDQUFHO2dCQUFDWixTQUFTLEVBQUMsQ0FBbUI7O2dHQUMvQmEsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFaEIsU0FBUztrQ0FBRSxDQUFFOzs7Ozs7Z0dBQ3pCZSxDQUFFO3dCQUFDQyxPQUFPLEVBQUVsQixRQUFRO2tDQUFFLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMsaUVBQWVOLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcz9jMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcblxuY29uc3QgTXNnSXRlbSA9ICh7XG4gIGlkLFxuICB1c2VySWQsXG4gIHRpbWVzdGFtcCxcbiAgdGV4dCxcbiAgb25VcGRhdGUsXG4gIG9uRGVsZXRlLFxuICBpc0VkaXRpbmcsXG4gIHN0YXJ0RWRpdCxcbn0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgPGgzPlxuICAgICAge3VzZXJJZH17JyAnfVxuICAgICAgPHN1Yj5cbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgPC9zdWI+XG4gICAgPC9oMz5cblxuICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICA8PlxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIHRleHRcbiAgICApfVxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xuIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwib25EZWxldGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsIm11dGF0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n\n\n\n\nconst UserIds = [\n    'roy',\n    'jay'\n];\nconst getRnadomUserId = ()=>UserIds[Math.round(Math.random())]\n;\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: i + 1,\n        userId: getRnadomUserId(),\n        timestamp: 123456790123 + i * 1000 * 60,\n        text: `${i + 1} mock text`\n    })\n).reverse();\nconst MsgList = ()=>{\n    const { 0: msgs1 , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const { 0: editingId , 1: setEditingId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs1.length,\n            userId: getRnadomUserId(),\n            timestamp: Date.now(),\n            text: `${msgs1.length} ${text}`\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]\n        );\n        console.log(msgs1);\n    };\n    const onUpdate = (text, id)=>{\n        console.log('onUpdate');\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id\n            );\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n        doneEdit();\n        console.log(msgs1);\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id\n            );\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEdit = ()=>setEditingId(null)\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgList.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id)\n                        ,\n                        startEdit: ()=>setEditingId(x.id)\n                        ,\n                        isEditing: editingId === x.id\n                    }, x.id, false, {\n                        fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgList.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/components/MsgList.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQ0csT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0UsUUFBUSxPQUFTZCxZQUFZLENBQUMsSUFBSTs7SUFFeEMsTUFBTTs7d0ZBRUR0QixpREFBUTtnQkFBQ3NDLE1BQU0sRUFBRWYsUUFBUTs7Ozs7O3dGQUN6QmdCLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFVOzBCQUNyQnJCLEtBQUksQ0FBQ1QsR0FBRyxFQUFDK0IsQ0FBQywrRUFDUnhDLGdEQUFPOzJCQUVGd0MsQ0FBQzt3QkFDTFgsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQk8sUUFBUSxNQUFRQSxRQUFRLENBQUNJLENBQUMsQ0FBQzVCLEVBQUU7O3dCQUM3QjZCLFNBQVMsTUFBUXBCLFlBQVksQ0FBQ21CLENBQUMsQ0FBQzVCLEVBQUU7O3dCQUNsQzhCLFNBQVMsRUFBRXRCLFNBQVMsS0FBS29CLENBQUMsQ0FBQzVCLEVBQUU7dUJBTHhCNEIsQ0FBQyxDQUFDNUIsRUFBRTs7Ozs7Ozs7Ozs7OztBQVdyQixDQUFDO0FBRUQsaUVBQWVLLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xuY29uc3QgZ2V0Um5hZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IGkgKyAxLFxuICAgIHVzZXJJZDogZ2V0Um5hZG9tVXNlcklkKCksXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxuICB9KSlcbiAgLnJldmVyc2UoKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0ge1xuICAgICAgaWQ6IG1zZ3MubGVuZ3RoLFxuICAgICAgdXNlcklkOiBnZXRSbmFkb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RofSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gICAgY29uc29sZS5sb2cobXNncyk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25VcGRhdGUnKTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgICBjb25zb2xlLmxvZyhtc2dzKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZSA9IGlkID0+IHtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSW5wdXQiLCJNc2dJdGVtIiwiVXNlcklkcyIsImdldFJuYWRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwicmV2ZXJzZSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.js\");\n\n\nconst Home = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE SNS\"\n            }, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zeromountain/Desktop/playground/local-api/client/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUUzQyxLQUFLLENBQUNDLElBQUk7O3dGQUVMQyxDQUFFOzBCQUFDLENBQVU7Ozs7Ozt3RkFDYkYsMkRBQU87Ozs7Ozs7O0FBSVosaUVBQWVDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPD5cbiAgICA8aDE+U0lNUExFIFNOUzwvaDE+XG4gICAgPE1zZ0xpc3QgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIk1zZ0xpc3QiLCJIb21lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
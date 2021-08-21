webpackHotUpdate_N_E("pages/charity",{

/***/ "./Components/Charity/modalswiper/index.js":
/*!*************************************************!*\
  !*** ./Components/Charity/modalswiper/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/components/navigation/navigation.min.css */ "./node_modules/swiper/components/navigation/navigation.min.css");
/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/components/thumbs/thumbs.min.css */ "./node_modules/swiper/components/thumbs/thumbs.min.css");
/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\rcp\\tcpmarket00\\Components\\Charity\\modalswiper\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








swiper_core__WEBPACK_IMPORTED_MODULE_7__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_7__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_7__["Thumbs"]]);

function slideclick() {
  var slide = document.getElementById('chartslid');
  document.getElementById('openslide').style.display = "none";
  document.getElementById('chartslid').style.opacity = "1";
  document.getElementById('chartslid').style.zIndex = "10";
}

function removslideclick() {
  document.getElementById('chartslid').style.opacity = "0";
  document.getElementById('chartslid').style.zIndex = "-1";
  document.getElementById('openslide').style.display = "block";
}

var Activslider = function Activslider() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      thumbsSwiper = _useState[0],
      setThumbsSwiper = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "charity-cont-slide activ_slide",
    id: "chartslid",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "charity-cont-slide-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: slideclick,
        id: "openslide",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M18 5.59V1C18 0.45 17.55 0 17 0H12.41C11.52 0 11.07 1.08 11.7 1.71L13.29 3.3L3.29 13.3L1.7 11.71C1.08 11.08 0 11.52 0 12.41V17C0 17.55 0.45 18 1 18H5.59C6.48 18 6.93 16.92 6.3 16.29L4.71 14.7L14.71 4.7L16.3 6.29C16.92 6.92 18 6.48 18 5.59Z",
            fill: "#D7E1EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
        spaceBetween: 0,
        slidesPerView: 'auto',
        navigation: {
          prevEl: ".prevslide",
          nextEl: ".nextslide"
        },
        thumbs: {
          swiper: thumbsSwiper
        },
        loop: false,
        className: "mySwiper2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: removslideclick,
          className: "clousactivslide",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            width: "15",
            height: "17",
            viewBox: "0 0 15 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
              x1: "0.365528",
              y1: "0.658841",
              x2: "14.3655",
              y2: "15.6588",
              stroke: "#D7E1EB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
              x1: "14.3763",
              y1: "0.329252",
              x2: "0.376288",
              y2: "16.3293",
              stroke: "#D7E1EB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 79
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/picture.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict (1).png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }, _this);
};

_s(Activslider, "1Z+6QtiyskARjDnvU2QN05OOC/c=");

_c = Activslider;
/* harmony default export */ __webpack_exports__["default"] = (Activslider);

var _c;

$RefreshReg$(_c, "Activslider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFyaXR5L21vZGFsc3dpcGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiVGh1bWJzIiwic2xpZGVjbGljayIsInNsaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJyZW1vdnNsaWRlY2xpY2siLCJBY3RpdnNsaWRlciIsInVzZVN0YXRlIiwidGh1bWJzU3dpcGVyIiwic2V0VGh1bWJzU3dpcGVyIiwicHJldkVsIiwibmV4dEVsIiwic3dpcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQUEsbURBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLHNEQUFELEVBQVlDLGtEQUFaLENBQWY7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQjtBQUN0QixNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0FELFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNDLE9BQTNDLEdBQW1ELE1BQW5EO0FBQ0FILFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNFLE9BQTNDLEdBQW1ELEdBQW5EO0FBQ0FKLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNHLE1BQTNDLEdBQWtELElBQWxEO0FBQ0M7O0FBQ0QsU0FBU0MsZUFBVCxHQUEyQjtBQUMzQk4sVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ0UsT0FBM0MsR0FBbUQsR0FBbkQ7QUFDQUosVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFy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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBNkJELENBL0JEOztHQUFNQyxXOztLQUFBQSxXO0FBZ0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyaXR5LmVhMGY2OWMyNTY4MGE3YzVmZmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvc3dpcGVyLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxyXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLm1pbi5jc3NcIlxyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuTmF2aWdhdGlvbixUaHVtYnNcclxufSBmcm9tICdzd2lwZXIvY29yZSc7XHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFRodW1ic10pO1xyXG5mdW5jdGlvbiBzbGlkZWNsaWNrICgpe1xyXG52YXIgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJylcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydHNsaWQnKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUuekluZGV4PVwiMTBcIjtcclxufVxyXG5mdW5jdGlvbiByZW1vdnNsaWRlY2xpY2sgKCl7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydHNsaWQnKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUuekluZGV4PVwiLTFcIjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG59XHJcbmNvbnN0IEFjdGl2c2xpZGVyID0gKCkgPT4ge1xyXG5jb25zdCBbdGh1bWJzU3dpcGVyLCBzZXRUaHVtYnNTd2lwZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXNsaWRlIGFjdGl2X3NsaWRlXCIgaWQ9XCJjaGFydHNsaWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtc2xpZGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17c2xpZGVjbGlja30gaWQ9XCJvcGVuc2xpZGVcIj48c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggNS41OVYxQzE4IDAuNDUgMTcuNTUgMCAxNyAwSDEyLjQxQzExLjUyIDAgMTEuMDcgMS4wOCAxMS43IDEuNzFMMTMuMjkgMy4zTDMuMjkgMTMuM0wxLjcgMTEuNzFDMS4wOCAxMS4wOCAwIDExLjUyIDAgMTIuNDFWMTdDMCAxNy41NSAwLjQ1IDE4IDEgMThINS41OUM2LjQ4IDE4IDYuOTMgMTYuOTIgNi4zIDE2LjI5TDQuNzEgMTQuN0wxNC43MSA0LjdMMTYuMyA2LjI5QzE2LjkyIDYuOTIgMTggNi40OCAxOCA1LjU5WlwiIGZpbGw9XCIjRDdFMUVCXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXIgc3BhY2VCZXR3ZWVuPXswfSBzbGlkZXNQZXJWaWV3PXsnYXV0byd9IG5hdmlnYXRpb249e3twcmV2RWw6IFwiLnByZXZzbGlkZVwiLCBuZXh0RWw6IFwiLm5leHRzbGlkZVwifX0gIHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlciB9fSBsb29wPXtmYWxzZX0gY2xhc3NOYW1lPVwibXlTd2lwZXIyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92c2xpZGVjbGlja30gY2xhc3NOYW1lPVwiY2xvdXNhY3RpdnNsaWRlXCI+PHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE1IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjAuMzY1NTI4XCIgeTE9XCIwLjY1ODg0MVwiIHgyPVwiMTQuMzY1NVwiIHkyPVwiMTUuNjU4OFwiIHN0cm9rZT1cIiNEN0UxRUJcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjE0LjM3NjNcIiB5MT1cIjAuMzI5MjUyXCIgeDI9XCIwLjM3NjI4OFwiIHkyPVwiMTYuMzI5M1wiIHN0cm9rZT1cIiNEN0UxRUJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0dXJlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0ICgxKS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFjdGl2c2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
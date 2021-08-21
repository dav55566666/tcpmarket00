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
      setThumbsSwiper = _useState[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bottom-slide",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "prevslide"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
      onSwiper: setThumbsSwiper,
      spaceBetween: 16,
      navigation: {
        prevEl: ".prevslide",
        nextEl: ".nextslide"
      },
      loop: true,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      className: "mySwiper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/picture.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/pict.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/pict (1).png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/pict.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "nextslide"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(Activslider, "giOozCbhxQCtE8EoDD0rdI3MQiI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFyaXR5L21vZGFsc3dpcGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiVGh1bWJzIiwic2xpZGVjbGljayIsInNsaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJyZW1vdnNsaWRlY2xpY2siLCJBY3RpdnNsaWRlciIsInVzZVN0YXRlIiwic2V0VGh1bWJzU3dpcGVyIiwicHJldkVsIiwibmV4dEVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQUEsbURBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLHNEQUFELEVBQVlDLGtEQUFaLENBQWY7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQjtBQUN0QixNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0FELFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNDLE9BQTNDLEdBQW1ELE1BQW5EO0FBQ0FILFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNFLE9BQTNDLEdBQW1ELEdBQW5EO0FBQ0FKLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNHLE1BQTNDLEdBQWtELElBQWxEO0FBQ0M7O0FBQ0QsU0FBU0MsZUFBVCxHQUEyQjtBQUMzQk4sVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ0UsT0FBM0MsR0FBbUQsR0FBbkQ7QUFDQUosVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ0csTUFBM0MsR0FBa0QsSUFBbEQ7QUFDQUwsVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ0MsT0FBM0MsR0FBbUQsT0FBbkQ7QUFDQzs7QUFDRCxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsSUFBRCxDQURUO0FBQUEsTUFDbEJDLGVBRGtCOztBQUV4QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbURBQUQ7QUFBUSxjQUFRLEVBQUVBLGVBQWxCO0FBQW1DLGtCQUFZLEVBQUUsRUFBakQ7QUFBcUQsZ0JBQVUsRUFBRTtBQUFDQyxjQUFNLEVBQUUsWUFBVDtBQUF1QkMsY0FBTSxFQUFFO0FBQS9CLE9BQWpFO0FBQStHLFVBQUksRUFBRSxJQUFySDtBQUEySCxtQkFBYSxFQUFFLENBQTFJO0FBQTZJLGNBQVEsRUFBRSxJQUF2SjtBQUE2SiwyQkFBcUIsRUFBRSxJQUFwTDtBQUEwTCx5QkFBbUIsRUFBRSxJQUEvTTtBQUFxTixlQUFTLEVBQUMsVUFBL047QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLHdEQUFEO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBT0UscUVBQUMsd0RBQUQ7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFVRSxxRUFBQyx3REFBRDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQWdCRTtBQUFRLGVBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBdEJEOztHQUFNSixXOztLQUFBQSxXO0FBdUJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyaXR5LmVmNjkxOTFiNDU1MzZhZDQzOGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvc3dpcGVyLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxyXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLm1pbi5jc3NcIlxyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuTmF2aWdhdGlvbixUaHVtYnNcclxufSBmcm9tICdzd2lwZXIvY29yZSc7XHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFRodW1ic10pO1xyXG5mdW5jdGlvbiBzbGlkZWNsaWNrICgpe1xyXG52YXIgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJylcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydHNsaWQnKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUuekluZGV4PVwiMTBcIjtcclxufVxyXG5mdW5jdGlvbiByZW1vdnNsaWRlY2xpY2sgKCl7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydHNsaWQnKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUuekluZGV4PVwiLTFcIjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG59XHJcbmNvbnN0IEFjdGl2c2xpZGVyID0gKCkgPT4ge1xyXG5jb25zdCBbIHNldFRodW1ic1N3aXBlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tc2xpZGVcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2c2xpZGVcIj48L2J1dHRvbj5cclxuICAgICAgPFN3aXBlciBvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyfSBzcGFjZUJldHdlZW49ezE2fSBuYXZpZ2F0aW9uPXt7cHJldkVsOiBcIi5wcmV2c2xpZGVcIiwgbmV4dEVsOiBcIi5uZXh0c2xpZGVcIn19IGxvb3A9e3RydWV9IHNsaWRlc1BlclZpZXc9ezR9IGZyZWVNb2RlPXt0cnVlfSB3YXRjaFNsaWRlc1Zpc2liaWxpdHk9e3RydWV9IHdhdGNoU2xpZGVzUHJvZ3Jlc3M9e3RydWV9IGNsYXNzTmFtZT1cIm15U3dpcGVyXCI+XHJcbiAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdHVyZS5wbmdcIiAvPlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdCAoMSkucG5nXCIgLz5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0c2xpZGVcIj48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZzbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
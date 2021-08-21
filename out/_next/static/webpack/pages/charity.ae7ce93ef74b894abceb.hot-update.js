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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bottom-slide",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "prevslide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
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
            lineNumber: 56,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict (1).png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icons/pict.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "nextslide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFyaXR5L21vZGFsc3dpcGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiVGh1bWJzIiwic2xpZGVjbGljayIsInNsaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJyZW1vdnNsaWRlY2xpY2siLCJBY3RpdnNsaWRlciIsInVzZVN0YXRlIiwidGh1bWJzU3dpcGVyIiwic2V0VGh1bWJzU3dpcGVyIiwicHJldkVsIiwibmV4dEVsIiwic3dpcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQUEsbURBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLHNEQUFELEVBQVlDLGtEQUFaLENBQWY7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQjtBQUN0QixNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0FELFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNDLE9BQTNDLEdBQW1ELE1BQW5EO0FBQ0FILFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNFLE9BQTNDLEdBQW1ELEdBQW5EO0FBQ0FKLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNHLE1BQTNDLEdBQWtELElBQWxEO0FBQ0M7O0FBQ0QsU0FBU0MsZUFBVCxHQUEyQjtBQUMzQk4sVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ0UsT0FBM0MsR0FBbUQsR0FBbkQ7QUFDQUosVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFy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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUjtBQStDRCxDQWpERDs7R0FBTUwsVzs7S0FBQUEsVztBQWtEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcml0eS5hZTdjZTkzZWY3NGI4OTRhYmNlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL3N3aXBlci5taW4uY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5taW4uY3NzXCJcclxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcclxuXHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7XHJcbk5hdmlnYXRpb24sVGh1bWJzXHJcbn0gZnJvbSAnc3dpcGVyL2NvcmUnO1xyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbixUaHVtYnNdKTtcclxuZnVuY3Rpb24gc2xpZGVjbGljayAoKXtcclxudmFyIHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuc2xpZGUnKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpLnN0eWxlLnpJbmRleD1cIjEwXCI7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZzbGlkZWNsaWNrICgpe1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpLnN0eWxlLnpJbmRleD1cIi0xXCI7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuc2xpZGUnKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxufVxyXG5jb25zdCBBY3RpdnNsaWRlciA9ICgpID0+IHtcclxuY29uc3QgW3RodW1ic1N3aXBlciwgc2V0VGh1bWJzU3dpcGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1zbGlkZSBhY3Rpdl9zbGlkZVwiIGlkPVwiY2hhcnRzbGlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXNsaWRlLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3NsaWRlY2xpY2t9IGlkPVwib3BlbnNsaWRlXCI+PHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDUuNTlWMUMxOCAwLjQ1IDE3LjU1IDAgMTcgMEgxMi40MUMxMS41MiAwIDExLjA3IDEuMDggMTEuNyAxLjcxTDEzLjI5IDMuM0wzLjI5IDEzLjNMMS43IDExLjcxQzEuMDggMTEuMDggMCAxMS41MiAwIDEyLjQxVjE3QzAgMTcuNTUgMC40NSAxOCAxIDE4SDUuNTlDNi40OCAxOCA2LjkzIDE2LjkyIDYuMyAxNi4yOUw0LjcxIDE0LjdMMTQuNzEgNC43TDE2LjMgNi4yOUMxNi45MiA2LjkyIDE4IDYuNDggMTggNS41OVpcIiBmaWxsPVwiI0Q3RTFFQlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8U3dpcGVyIHNwYWNlQmV0d2Vlbj17MH0gc2xpZGVzUGVyVmlldz17J2F1dG8nfSBuYXZpZ2F0aW9uPXt7cHJldkVsOiBcIi5wcmV2c2xpZGVcIiwgbmV4dEVsOiBcIi5uZXh0c2xpZGVcIn19ICB0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXIgfX0gbG9vcD17ZmFsc2V9IGNsYXNzTmFtZT1cIm15U3dpcGVyMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1vdnNsaWRlY2xpY2t9IGNsYXNzTmFtZT1cImNsb3VzYWN0aXZzbGlkZVwiPjxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNSAxN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIwLjM2NTUyOFwiIHkxPVwiMC42NTg4NDFcIiB4Mj1cIjE0LjM2NTVcIiB5Mj1cIjE1LjY1ODhcIiBzdHJva2U9XCIjRDdFMUVCXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxNC4zNzYzXCIgeTE9XCIwLjMyOTI1MlwiIHgyPVwiMC4zNzYyODhcIiB5Mj1cIjE2LjMyOTNcIiBzdHJva2U9XCIjRDdFMUVCXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdHVyZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdCAoMSkucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldnNsaWRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPFN3aXBlciBvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyfSBzcGFjZUJldHdlZW49ezE2fSBuYXZpZ2F0aW9uPXt7cHJldkVsOiBcIi5wcmV2c2xpZGVcIiwgbmV4dEVsOiBcIi5uZXh0c2xpZGVcIn19IGxvb3A9e3RydWV9IHNsaWRlc1BlclZpZXc9ezR9IGZyZWVNb2RlPXt0cnVlfSB3YXRjaFNsaWRlc1Zpc2liaWxpdHk9e3RydWV9IHdhdGNoU2xpZGVzUHJvZ3Jlc3M9e3RydWV9IGNsYXNzTmFtZT1cIm15U3dpcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3R1cmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QgKDEpLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dHNsaWRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBY3RpdnNsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
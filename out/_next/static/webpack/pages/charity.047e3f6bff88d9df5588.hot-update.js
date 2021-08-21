webpackHotUpdate_N_E("pages/charity",{

/***/ "./Components/Charity/index.js":
/*!*************************************!*\
  !*** ./Components/Charity/index.js ***!
  \*************************************/
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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _modalswiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modalswiper */ "./Components/Charity/modalswiper/index.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\rcp\\tcpmarket00\\Components\\Charity\\index.js",
    _this = undefined,
    _s = $RefreshSig$();












swiper_core__WEBPACK_IMPORTED_MODULE_11__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_11__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_11__["Thumbs"]]);

var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "charity-cont-right-wallet-flex-valyut",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/Vector (12).svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, undefined), "Bitcoin"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "0.000000003"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

function slidetext(e) {
  var b = 0;
  var text = document.getElementById('opistext');

  if (text.offsetHeight !== 120) {
    text.style.height = "120px";
    document.getElementById('selecttext').text = "Развернуть полностью";
    console.log('e');
  } else {
    text.style.height = "auto";
    document.getElementById('selecttext').text = "Свернуть";
    console.log("as");
  }
}

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

var Charity = function Charity(_ref) {
  _s();

  var priceTop = _ref.priceTop,
      opis = _ref.opis,
      donation = _ref.donation,
      donationtotal = _ref.donationtotal,
      collected = _ref.collected,
      collectedtotal = _ref.collectedtotal,
      valyut = _ref.valyut,
      valyutprice = _ref.valyutprice;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      thumbsSwiper = _useState[0],
      setThumbsSwiper = _useState[1],
      thumbsSwiper2 = _useState[2],
      setThumbsSwiper2 = _useState[3];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "charity",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "charity-cont",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 65,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
            spaceBetween: 0,
            slidesPerView: 'auto',
            navigation: {
              prevEl: ".prevslide",
              nextEl: ".nextslide"
            },
            thumbs: {
              swiper: thumbsSwiper2
            },
            loop: true,
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
                  lineNumber: 70,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                  x1: "14.3763",
                  y1: "0.329252",
                  x2: "0.376288",
                  y2: "16.3293",
                  stroke: "#D7E1EB"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 81
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/picture.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bottom-slide",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "prevslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
            onSwiper: setThumbsSwiper2,
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
                lineNumber: 92,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "nextslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "charity-cont-slide",
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
                lineNumber: 110,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 58
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 19
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
            loop: true,
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
                  lineNumber: 115,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                  x1: "14.3763",
                  y1: "0.329252",
                  x2: "0.376288",
                  y2: "16.3293",
                  stroke: "#D7E1EB"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 83
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/picture.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bottom-slide",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "prevslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 19
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
                lineNumber: 137,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "nextslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "charity-cont-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "\u0413\u043E\u0440\u0434\u043E\u043C\u0443 \u043E\u043B\u0435\u043D\u044E \u043D\u0443\u0436\u043D\u044B \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043B\u0435\u0447\u0435\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "pricetop",
          children: ["\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: priceTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 56
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "opistitle",
          children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "opistext",
          id: "opistext",
          children: opis
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          id: "selecttext",
          onClick: slidetext,
          children: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "charity-cont-right-collected",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "charity-cont-right-collected-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: collected
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: collectedtotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "charity-cont-right-collected-item-range",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "charity-cont-right-collected-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: donation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: donationtotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "charity-cont-right-wallet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u041A\u043E\u0448\u0435\u043B\u0435\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "charity-cont-right-wallet-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
              overlay: menu,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "charity-cont-right-wallet-flex-valyut",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/icons/Vector (12).svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 27
                  }, _this), valyut]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [valyutprice, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/icons/Vecasdjghtor.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 28
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/Vecascastor.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 27
            }, _this), "\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u0442\u044C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, _this);
};

_s(Charity, "pXsKWGnxP3LhS29Is5m1XQEi8Hw=");

_c = Charity;
/* harmony default export */ __webpack_exports__["default"] = (Charity);

var _c;

$RefreshReg$(_c, "Charity");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFyaXR5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiVGh1bWJzIiwibWVudSIsInNsaWRldGV4dCIsImUiLCJiIiwidGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJzbGlkZWNsaWNrIiwic2xpZGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsInpJbmRleCIsInJlbW92c2xpZGVjbGljayIsIkNoYXJpdHkiLCJwcmljZVRvcCIsIm9waXMiLCJkb25hdGlvbiIsImRvbmF0aW9udG90YWwiLCJjb2xsZWN0ZWQiLCJjb2xsZWN0ZWR0b3RhbCIsInZhbHl1dCIsInZhbHl1dHByaWNlIiwidXNlU3RhdGUiLCJ0aHVtYnNTd2lwZXIiLCJzZXRUaHVtYnNTd2lwZXIiLCJ0aHVtYnNTd2lwZXIyIiwic2V0VGh1bWJzU3dpcGVyMiIsInByZXZFbCIsIm5leHRFbCIsInN3aXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQSxvREFBVSxDQUFDQyxHQUFYLENBQWUsQ0FBQ0MsdURBQUQsRUFBWUMsbURBQVosQ0FBZjs7QUFDQSxJQUFNQyxJQUFJLGdCQUNSLHFFQUFDLHlDQUFEO0FBQUEseUJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBQSw4QkFDRTtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFpQkU7QUFBQSxvQ0FBUTtBQUFLLGlCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBd0lILENBMUlEOztHQUFNUixPOztLQUFBQSxPO0FBMklTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyaXR5LjA0N2UzZjZiZmY4OGQ5ZGY1NTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9zd2lwZXIubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubWluLmNzc1wiXHJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL3RodW1icy90aHVtYnMubWluLmNzc1wiXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgTWVudSwgRHJvcGRvd24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgQWN0aXZzbGlkZXIgZnJvbSBcIi4vbW9kYWxzd2lwZXJcIlxyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuICBOYXZpZ2F0aW9uLFRodW1ic1xyXG59IGZyb20gJ3N3aXBlci9jb3JlJztcclxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sVGh1bWJzXSk7XHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnU+XHJcbiAgICA8TWVudS5JdGVtPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtd2FsbGV0LWZsZXgtdmFseXV0XCI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL1ZlY3RvciAoMTIpLnN2Z1wiIC8+XHJcbiAgICAgICAgQml0Y29pblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDAuMDAwMDAwMDAzXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5mdW5jdGlvbiBzbGlkZXRleHQoZSl7XHJcbiAgdmFyIGIgPSAwO1xyXG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29waXN0ZXh0JylcclxuICBpZih0ZXh0Lm9mZnNldEhlaWdodCE9PTEyMCl7XHJcbiAgICB0ZXh0LnN0eWxlLmhlaWdodD1cIjEyMHB4XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0dGV4dCcpLnRleHQgPSBcItCg0LDQt9Cy0LXRgNC90YPRgtGMINC/0L7Qu9C90L7RgdGC0YzRjlwiXHJcbiAgICBjb25zb2xlLmxvZygnZScpO1xyXG4gIH1lbHNle1xyXG4gICAgdGV4dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0dGV4dCcpLnRleHQgPSBcItCh0LLQtdGA0L3Rg9GC0YxcIlxyXG4gICAgY29uc29sZS5sb2coXCJhc1wiKVxyXG5cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2xpZGVjbGljayAoKXtcclxuICB2YXIgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJylcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbnNsaWRlJykuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzbGlkJykuc3R5bGUuekluZGV4PVwiMTBcIjtcclxufVxyXG5mdW5jdGlvbiByZW1vdnNsaWRlY2xpY2sgKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpLnN0eWxlLnpJbmRleD1cIi0xXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG59XHJcbmNvbnN0IENoYXJpdHkgPSAoe3ByaWNlVG9wLCBvcGlzLCBkb25hdGlvbiwgZG9uYXRpb250b3RhbCwgY29sbGVjdGVkLCBjb2xsZWN0ZWR0b3RhbCx2YWx5dXQsdmFseXV0cHJpY2UgIH0pID0+IHtcclxuICBjb25zdCBbdGh1bWJzU3dpcGVyLCBzZXRUaHVtYnNTd2lwZXIsdGh1bWJzU3dpcGVyMiwgc2V0VGh1bWJzU3dpcGVyMl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1zbGlkZSBhY3Rpdl9zbGlkZVwiIGlkPVwiY2hhcnRzbGlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtc2xpZGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtzbGlkZWNsaWNrfSBpZD1cIm9wZW5zbGlkZVwiPjxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDUuNTlWMUMxOCAwLjQ1IDE3LjU1IDAgMTcgMEgxMi40MUMxMS41MiAwIDExLjA3IDEuMDggMTEuNyAxLjcxTDEzLjI5IDMuM0wzLjI5IDEzLjNMMS43IDExLjcxQzEuMDggMTEuMDggMCAxMS41MiAwIDEyLjQxVjE3QzAgMTcuNTUgMC40NSAxOCAxIDE4SDUuNTlDNi40OCAxOCA2LjkzIDE2LjkyIDYuMyAxNi4yOUw0LjcxIDE0LjdMMTQuNzEgNC43TDE2LjMgNi4yOUMxNi45MiA2LjkyIDE4IDYuNDggMTggNS41OVpcIiBmaWxsPVwiI0Q3RTFFQlwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyIHNwYWNlQmV0d2Vlbj17MH0gc2xpZGVzUGVyVmlldz17J2F1dG8nfSBuYXZpZ2F0aW9uPXt7cHJldkVsOiBcIi5wcmV2c2xpZGVcIiwgbmV4dEVsOiBcIi5uZXh0c2xpZGVcIn19ICB0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXIyIH19IGxvb3A9e3RydWV9IGNsYXNzTmFtZT1cIm15U3dpcGVyMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92c2xpZGVjbGlja30gY2xhc3NOYW1lPVwiY2xvdXNhY3RpdnNsaWRlXCI+PHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE1IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMC4zNjU1MjhcIiB5MT1cIjAuNjU4ODQxXCIgeDI9XCIxNC4zNjU1XCIgeTI9XCIxNS42NTg4XCIgc3Ryb2tlPVwiI0Q3RTFFQlwiLz5cclxuICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxNC4zNzYzXCIgeTE9XCIwLjMyOTI1MlwiIHgyPVwiMC4zNzYyODhcIiB5Mj1cIjE2LjMyOTNcIiBzdHJva2U9XCIjRDdFMUVCXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0dXJlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0ICgxKS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldnNsaWRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyIG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXIyfSBzcGFjZUJldHdlZW49ezE2fSBuYXZpZ2F0aW9uPXt7cHJldkVsOiBcIi5wcmV2c2xpZGVcIiwgbmV4dEVsOiBcIi5uZXh0c2xpZGVcIn19IGxvb3A9e3RydWV9IHNsaWRlc1BlclZpZXc9ezR9IGZyZWVNb2RlPXt0cnVlfSB3YXRjaFNsaWRlc1Zpc2liaWxpdHk9e3RydWV9IHdhdGNoU2xpZGVzUHJvZ3Jlc3M9e3RydWV9IGNsYXNzTmFtZT1cIm15U3dpcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0dXJlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0ICgxKS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHRzbGlkZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtc2xpZGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3NsaWRlY2xpY2t9IGlkPVwib3BlbnNsaWRlXCI+PHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOCA1LjU5VjFDMTggMC40NSAxNy41NSAwIDE3IDBIMTIuNDFDMTEuNTIgMCAxMS4wNyAxLjA4IDExLjcgMS43MUwxMy4yOSAzLjNMMy4yOSAxMy4zTDEuNyAxMS43MUMxLjA4IDExLjA4IDAgMTEuNTIgMCAxMi40MVYxN0MwIDE3LjU1IDAuNDUgMTggMSAxOEg1LjU5QzYuNDggMTggNi45MyAxNi45MiA2LjMgMTYuMjlMNC43MSAxNC43TDE0LjcxIDQuN0wxNi4zIDYuMjlDMTYuOTIgNi45MiAxOCA2LjQ4IDE4IDUuNTlaXCIgZmlsbD1cIiNEN0UxRUJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciBzcGFjZUJldHdlZW49ezB9IHNsaWRlc1BlclZpZXc9eydhdXRvJ30gbmF2aWdhdGlvbj17e3ByZXZFbDogXCIucHJldnNsaWRlXCIsIG5leHRFbDogXCIubmV4dHNsaWRlXCJ9fSAgdGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH19IGxvb3A9e3RydWV9IGNsYXNzTmFtZT1cIm15U3dpcGVyMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZzbGlkZWNsaWNrfSBjbGFzc05hbWU9XCJjbG91c2FjdGl2c2xpZGVcIj48c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTUgMTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjAuMzY1NTI4XCIgeTE9XCIwLjY1ODg0MVwiIHgyPVwiMTQuMzY1NVwiIHkyPVwiMTUuNjU4OFwiIHN0cm9rZT1cIiNEN0UxRUJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxNC4zNzYzXCIgeTE9XCIwLjMyOTI1MlwiIHgyPVwiMC4zNzYyODhcIiB5Mj1cIjE2LjMyOTNcIiBzdHJva2U9XCIjRDdFMUVCXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3R1cmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QgKDEpLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldnNsaWRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXIgb25Td2lwZXI9e3NldFRodW1ic1N3aXBlcn0gc3BhY2VCZXR3ZWVuPXsxNn0gbmF2aWdhdGlvbj17e3ByZXZFbDogXCIucHJldnNsaWRlXCIsIG5leHRFbDogXCIubmV4dHNsaWRlXCJ9fSBsb29wPXt0cnVlfSBzbGlkZXNQZXJWaWV3PXs0fSBmcmVlTW9kZT17dHJ1ZX0gd2F0Y2hTbGlkZXNWaXNpYmlsaXR5PXt0cnVlfSB3YXRjaFNsaWRlc1Byb2dyZXNzPXt0cnVlfSBjbGFzc05hbWU9XCJteVN3aXBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3R1cmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QgKDEpLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dHNsaWRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PtCT0L7RgNC00L7QvNGDINC+0LvQtdC90Y4g0L3Rg9C20L3RiyDQtNC10L3RjNCz0Lgg0L3QsCDQu9C10YfQtdC90LjQtTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZXRvcFwiPtCd0YPQttC90L4g0YHQvtCx0YDQsNGC0Yw6IDxzcGFuPntwcmljZVRvcH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3Bpc3RpdGxlXCI+0J7Qv9C40YHQsNC90LjQtTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9waXN0ZXh0XCIgaWQ9XCJvcGlzdGV4dFwiPntvcGlzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGlkPVwic2VsZWN0dGV4dFwiIG9uQ2xpY2s9e3NsaWRldGV4dH0+0KDQsNC30LLQtdGA0L3Rg9GC0Ywg0L/QvtC70L3QvtGB0YLRjNGOPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtY29sbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LWNvbGxlY3RlZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvbGxlY3RlZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbGxlY3RlZHRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodC1jb2xsZWN0ZWQtaXRlbS1yYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtY29sbGVjdGVkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57ZG9uYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntkb25hdGlvbnRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LXdhbGxldFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QmtC+0YjQtdC70LXQujwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtd2FsbGV0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtd2FsbGV0LWZsZXgtdmFseXV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL1ZlY3RvciAoMTIpLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHl1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFseXV0cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvVmVjYXNkamdodG9yLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KHRg9C80LzQsCDQv9C+0LbQtdGA0YLQstC+0LLQsNC90LjRj1wiIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+PGltZyBzcmM9XCIvaWNvbnMvVmVjYXNjYXN0b3Iuc3ZnXCIgLz7Qn9C+0LbQtdGA0YLQstC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcml0eTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
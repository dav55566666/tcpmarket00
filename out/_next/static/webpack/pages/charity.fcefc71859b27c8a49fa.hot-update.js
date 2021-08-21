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
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\rcp\\tcpmarket00\\Components\\Charity\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











swiper_core__WEBPACK_IMPORTED_MODULE_10__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_10__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_10__["Thumbs"]]);

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
        children: ["0.000000003", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/Vecasdjghtor.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
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
  var text = document.getElementById('opistext');

  if (text.style.height !== "120px") {
    text.style.height = "120px"; // console.log("as")
  } else {
    text.style.height = "auto";
    console.log("as");
  }
}

function slideclick() {
  var slide = document.getElementById('chartslid');
  document.getElementById('openslide').style.display = "none";
  slide.className += " activ_slide";
}

function removslideclick() {
  var slide = document.getElementById('chartslid');
  document.getElementById('openslide').style.display = "block";
  slide.classList.remove("activ_slide");
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
      setThumbsSwiper = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "charity",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "charity-cont",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "charity-cont-slide",
        id: "chartslid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "activslidebox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 62,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 60
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
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
                  lineNumber: 67,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                  x1: "14.3763",
                  y1: "0.329252",
                  x2: "0.376288",
                  y2: "16.3293",
                  stroke: "#D7E1EB"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 85
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/picture.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 23
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bottom-slide",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "prevslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
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
                lineNumber: 89,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict (1).png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/icons/pict.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 23
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "nextslide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "charity-cont-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "\u0413\u043E\u0440\u0434\u043E\u043C\u0443 \u043E\u043B\u0435\u043D\u044E \u043D\u0443\u0436\u043D\u044B \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043B\u0435\u0447\u0435\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "pricetop",
          children: ["\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: priceTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 56
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "opistitle",
          children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "opistext",
          id: "opistext",
          children: [opis, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: slidetext,
            children: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 61
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "charity-cont-right-collected",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "charity-cont-right-collected-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: collected
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: collectedtotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "charity-cont-right-collected-item-range",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "charity-cont-right-collected-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: donation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: donationtotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "charity-cont-right-wallet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u041A\u043E\u0448\u0435\u043B\u0435\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
                    lineNumber: 128,
                    columnNumber: 27
                  }, _this), valyut]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [valyutprice, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/icons/Vecasdjghtor.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 28
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/Vecascastor.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 27
            }, _this), "\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u0442\u044C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, _this);
};

_s(Charity, "1Z+6QtiyskARjDnvU2QN05OOC/c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFyaXR5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiVGh1bWJzIiwibWVudSIsInNsaWRldGV4dCIsImUiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInNsaWRlY2xpY2siLCJzbGlkZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZW1vdnNsaWRlY2xpY2siLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJDaGFyaXR5IiwicHJpY2VUb3AiLCJvcGlzIiwiZG9uYXRpb24iLCJkb25hdGlvbnRvdGFsIiwiY29sbGVjdGVkIiwiY29sbGVjdGVkdG90YWwiLCJ2YWx5dXQiLCJ2YWx5dXRwcmljZSIsInVzZVN0YXRlIiwidGh1bWJzU3dpcGVyIiwic2V0VGh1bWJzU3dpcGVyIiwicHJldkVsIiwibmV4dEVsIiwic3dpcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0FBLG9EQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyx1REFBRCxFQUFZQyxtREFBWixDQUFmOztBQUNBLElBQU1DLElBQUksZ0JBQ1IscUVBQUMseUNBQUQ7QUFBQSx5QkFDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyx1Q0FBZjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsK0NBRUU7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWdCQSxTQUFTQyxTQUFULENBQW1CQyxDQUFuQixFQUFxQjtBQUNuQixNQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFYOztBQUNBLE1BQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxNQUFYLEtBQW9CLE9BQXZCLEVBQStCO0FBQzdCSixRQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBWCxHQUFrQixPQUFsQixDQUQ2QixDQUU3QjtBQUNELEdBSEQsTUFHSztBQUNISixRQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBWCxHQUFrQixNQUFsQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFDRjs7QUFDRCxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLEtBQUssR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQVo7QUFDQUQsVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxLQUFyQyxDQUEyQ00sT0FBM0MsR0FBbUQsTUFBbkQ7QUFDQUQsT0FBSyxDQUFDRSxTQUFOLElBQW1CLGNBQW5CO0FBQ0Q7O0FBQ0QsU0FBU0MsZUFBVCxHQUEyQjtBQUN6QixNQUFJSCxLQUFLLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0FELFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBckMsQ0FBMkNNLE9BQTNDLEdBQW1ELE9BQW5EO0FBQ0FELE9BQUssQ0FBQ0ksU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsYUFBdkI7QUFDRDs7QUFDRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErRjtBQUFBOztBQUFBLE1BQTdGQyxRQUE2RixRQUE3RkEsUUFBNkY7QUFBQSxNQUFuRkMsSUFBbUYsUUFBbkZBLElBQW1GO0FBQUEsTUFBN0VDLFFBQTZFLFFBQTdFQSxRQUE2RTtBQUFBLE1BQW5FQyxhQUFtRSxRQUFuRUEsYUFBbUU7QUFBQSxNQUFwREMsU0FBb0QsUUFBcERBLFNBQW9EO0FBQUEsTUFBekNDLGNBQXlDLFFBQXpDQSxjQUF5QztBQUFBLE1BQTFCQyxNQUEwQixRQUExQkEsTUFBMEI7QUFBQSxNQUFuQkMsV0FBbUIsUUFBbkJBLFdBQW1COztBQUFBLGtCQUNyRUMsc0RBQVEsQ0FBQyxJQUFELENBRDZEO0FBQUEsTUFDdEdDLFlBRHNHO0FBQUEsTUFDeEZDLGVBRHdGOztBQUUzRyxzQkFFSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFvQyxVQUFFLEVBQUMsV0FBdkM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUk7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0U7QUFBRyxtQkFBTyxFQUFFbEIsVUFBWjtBQUF3QixjQUFFLEVBQUMsV0FBM0I7QUFBQSxtQ0FBdUM7QUFBSyxtQkFBSyxFQUFDLElBQVg7QUFBZ0Isb0JBQU0sRUFBQyxJQUF2QjtBQUE0QixxQkFBTyxFQUFDLFdBQXBDO0FBQWdELGtCQUFJLEVBQUMsTUFBckQ7QUFBNEQsbUJBQUssRUFBQyw0QkFBbEU7QUFBQSxxQ0FDckM7QUFBTSxpQkFBQyxFQUFDLGlQQUFSO0FBQTBQLG9CQUFJLEVBQUM7QUFBL1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQyxtREFBRDtBQUFRLHdCQUFZLEVBQUUsQ0FBdEI7QUFBeUIseUJBQWEsRUFBRSxNQUF4QztBQUFnRCxzQkFBVSxFQUFFO0FBQUNtQixvQkFBTSxFQUFFLFlBQVQ7QUFBdUJDLG9CQUFNLEVBQUU7QUFBL0IsYUFBNUQ7QUFBMkcsa0JBQU0sRUFBRTtBQUFFQyxvQkFBTSxFQUFFSjtBQUFWLGFBQW5IO0FBQTZJLGdCQUFJLEVBQUUsS0FBbko7QUFBMEoscUJBQVMsRUFBQyxXQUFwSztBQUFBLG9DQUNFO0FBQVEscUJBQU8sRUFBRWIsZUFBakI7QUFBa0MsdUJBQVMsRUFBQyxpQkFBNUM7QUFBQSxxQ0FBOEQ7QUFBSyxxQkFBSyxFQUFDLElBQVg7QUFBZ0Isc0JBQU0sRUFBQyxJQUF2QjtBQUE0Qix1QkFBTyxFQUFDLFdBQXBDO0FBQWdELG9CQUFJLEVBQUMsTUFBckQ7QUFBNEQscUJBQUssRUFBQyw0QkFBbEU7QUFBQSx3Q0FDOUQ7QUFBTSxvQkFBRSxFQUFDLFVBQVQ7QUFBb0Isb0JBQUUsRUFBQyxVQUF2QjtBQUFrQyxvQkFBRSxFQUFDLFNBQXJDO0FBQStDLG9CQUFFLEVBQUMsU0FBbEQ7QUFBNEQsd0JBQU0sRUFBQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUQ4RCxlQUU5RDtBQUFNLG9CQUFFLEVBQUMsU0FBVDtBQUFtQixvQkFBRSxFQUFDLFVBQXRCO0FBQWlDLG9CQUFFLEVBQUMsVUFBcEM7QUFBK0Msb0JBQUUsRUFBQyxTQUFsRDtBQUE0RCx3QkFBTSxFQUFDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRjhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUUscUVBQUMsd0RBQUQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQVNFLHFFQUFDLHdEQUFEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFZRSxxRUFBQyx3REFBRDtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLGVBZUUscUVBQUMsd0RBQUQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBMkJJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0U7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxtREFBRDtBQUFRLG9CQUFRLEVBQUVjLGVBQWxCO0FBQW1DLHdCQUFZLEVBQUUsRUFBakQ7QUFBcUQsc0JBQVUsRUFBRTtBQUFDQyxvQkFBTSxFQUFFLFlBQVQ7QUFBdUJDLG9CQUFNLEVBQUU7QUFBL0IsYUFBakU7QUFBK0csZ0JBQUksRUFBRSxJQUFySDtBQUEySCx5QkFBYSxFQUFFLENBQTFJO0FBQTZJLG9CQUFRLEVBQUUsSUFBdko7QUFBNkosaUNBQXFCLEVBQUUsSUFBcEw7QUFBMEwsK0JBQW1CLEVBQUUsSUFBL007QUFBcU4scUJBQVMsRUFBQyxVQUEvTjtBQUFBLG9DQUNFLHFFQUFDLHdEQUFEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSxxRUFBQyx3REFBRDtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBT0UscUVBQUMsd0RBQUQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVVFLHFFQUFDLHdEQUFEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBZ0JFO0FBQVEscUJBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBK0NFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxpSEFBdUM7QUFBQSxzQkFBT1o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFHLG1CQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUcsbUJBQVMsRUFBQyxVQUFiO0FBQXdCLFlBQUUsRUFBQyxVQUEzQjtBQUFBLHFCQUF1Q0MsSUFBdkMsZUFBNEM7QUFBRyxtQkFBTyxFQUFFbEIsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1DQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBSXFCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUssdUJBQVMsRUFBQyx5Q0FBZjtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxtQ0FBZjtBQUFBLG9DQUNFO0FBQUEsd0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBa0JFO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsb0NBQ0UscUVBQUMsNkNBQUQ7QUFBVSxxQkFBTyxFQUFFckIsSUFBbkI7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsdUNBQWY7QUFBQSx3Q0FDRTtBQUFBLDBDQUNFO0FBQUssdUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFR3dCLE1BRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBQSw2QkFDR0MsV0FESCxlQUVFO0FBQUssdUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRTtBQUFBLHFDQUFPO0FBQU8sb0JBQUksRUFBQyxNQUFaO0FBQW1CLDJCQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBaUJFO0FBQUEsb0NBQVE7QUFBSyxpQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQTJGSCxDQTdGRDs7R0FBTVIsTzs7S0FBQUEsTztBQThGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcml0eS5mY2VmYzcxODU5YjI3YzhhNDlmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvc3dpcGVyLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxyXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLm1pbi5jc3NcIlxyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcblxyXG5pbXBvcnQgU3dpcGVyQ29yZSwge1xyXG4gIE5hdmlnYXRpb24sVGh1bWJzXHJcbn0gZnJvbSAnc3dpcGVyL2NvcmUnO1xyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbixUaHVtYnNdKTtcclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudT5cclxuICAgIDxNZW51Lkl0ZW0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodC13YWxsZXQtZmxleC12YWx5dXRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvVmVjdG9yICgxMikuc3ZnXCIgLz5cclxuICAgICAgICBCaXRjb2luXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgMC4wMDAwMDAwMDNcclxuICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9WZWNhc2RqZ2h0b3Iuc3ZnXCIgLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L01lbnUuSXRlbT5cclxuICA8L01lbnU+XHJcbik7XHJcbmZ1bmN0aW9uIHNsaWRldGV4dChlKXtcclxuICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGlzdGV4dCcpXHJcbiAgaWYodGV4dC5zdHlsZS5oZWlnaHQhPT1cIjEyMHB4XCIpe1xyXG4gICAgdGV4dC5zdHlsZS5oZWlnaHQ9XCIxMjBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhc1wiKVxyXG4gIH1lbHNle1xyXG4gICAgdGV4dC5zdHlsZS5oZWlnaHQ9XCJhdXRvXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcImFzXCIpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNsaWRlY2xpY2sgKCl7XHJcbiAgdmFyIHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0c2xpZCcpXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5zbGlkZScpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgc2xpZGUuY2xhc3NOYW1lICs9IFwiIGFjdGl2X3NsaWRlXCI7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZzbGlkZWNsaWNrICgpe1xyXG4gIHZhciBzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydHNsaWQnKVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuc2xpZGUnKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZfc2xpZGVcIik7XHJcbn1cclxuY29uc3QgQ2hhcml0eSA9ICh7cHJpY2VUb3AsIG9waXMsIGRvbmF0aW9uLCBkb25hdGlvbnRvdGFsLCBjb2xsZWN0ZWQsIGNvbGxlY3RlZHRvdGFsLHZhbHl1dCx2YWx5dXRwcmljZSAgfSkgPT4ge1xyXG4gIGNvbnN0IFt0aHVtYnNTd2lwZXIsIHNldFRodW1ic1N3aXBlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXNsaWRlXCIgaWQ9XCJjaGFydHNsaWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZzbGlkZWJveFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1zbGlkZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtzbGlkZWNsaWNrfSBpZD1cIm9wZW5zbGlkZVwiPjxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOCA1LjU5VjFDMTggMC40NSAxNy41NSAwIDE3IDBIMTIuNDFDMTEuNTIgMCAxMS4wNyAxLjA4IDExLjcgMS43MUwxMy4yOSAzLjNMMy4yOSAxMy4zTDEuNyAxMS43MUMxLjA4IDExLjA4IDAgMTEuNTIgMCAxMi40MVYxN0MwIDE3LjU1IDAuNDUgMTggMSAxOEg1LjU5QzYuNDggMTggNi45MyAxNi45MiA2LjMgMTYuMjlMNC43MSAxNC43TDE0LjcxIDQuN0wxNi4zIDYuMjlDMTYuOTIgNi45MiAxOCA2LjQ4IDE4IDUuNTlaXCIgZmlsbD1cIiNEN0UxRUJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlciBzcGFjZUJldHdlZW49ezB9IHNsaWRlc1BlclZpZXc9eydhdXRvJ30gbmF2aWdhdGlvbj17e3ByZXZFbDogXCIucHJldnNsaWRlXCIsIG5leHRFbDogXCIubmV4dHNsaWRlXCJ9fSAgdGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH19IGxvb3A9e2ZhbHNlfSBjbGFzc05hbWU9XCJteVN3aXBlcjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZzbGlkZWNsaWNrfSBjbGFzc05hbWU9XCJjbG91c2FjdGl2c2xpZGVcIj48c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTUgMTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMC4zNjU1MjhcIiB5MT1cIjAuNjU4ODQxXCIgeDI9XCIxNC4zNjU1XCIgeTI9XCIxNS42NTg4XCIgc3Ryb2tlPVwiI0Q3RTFFQlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTQuMzc2M1wiIHkxPVwiMC4zMjkyNTJcIiB4Mj1cIjAuMzc2Mjg4XCIgeTI9XCIxNi4zMjkzXCIgc3Ryb2tlPVwiI0Q3RTFFQlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3R1cmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BpY3QgKDEpLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXZzbGlkZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXIgb25Td2lwZXI9e3NldFRodW1ic1N3aXBlcn0gc3BhY2VCZXR3ZWVuPXsxNn0gbmF2aWdhdGlvbj17e3ByZXZFbDogXCIucHJldnNsaWRlXCIsIG5leHRFbDogXCIubmV4dHNsaWRlXCJ9fSBsb29wPXt0cnVlfSBzbGlkZXNQZXJWaWV3PXs0fSBmcmVlTW9kZT17dHJ1ZX0gd2F0Y2hTbGlkZXNWaXNpYmlsaXR5PXt0cnVlfSB3YXRjaFNsaWRlc1Byb2dyZXNzPXt0cnVlfSBjbGFzc05hbWU9XCJteVN3aXBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0dXJlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9waWN0ICgxKS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGljdC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHRzbGlkZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PtCT0L7RgNC00L7QvNGDINC+0LvQtdC90Y4g0L3Rg9C20L3RiyDQtNC10L3RjNCz0Lgg0L3QsCDQu9C10YfQtdC90LjQtTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZXRvcFwiPtCd0YPQttC90L4g0YHQvtCx0YDQsNGC0Yw6IDxzcGFuPntwcmljZVRvcH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3Bpc3RpdGxlXCI+0J7Qv9C40YHQsNC90LjQtTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9waXN0ZXh0XCIgaWQ9XCJvcGlzdGV4dFwiPntvcGlzfTxhIG9uQ2xpY2s9e3NsaWRldGV4dH0+0KDQsNC30LLQtdGA0L3Rg9GC0Ywg0L/QvtC70L3QvtGB0YLRjNGOPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LWNvbGxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodC1jb2xsZWN0ZWQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjb2xsZWN0ZWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb2xsZWN0ZWR0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyaXR5LWNvbnQtcmlnaHQtY29sbGVjdGVkLWl0ZW0tcmFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LWNvbGxlY3RlZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2RvbmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZG9uYXRpb250b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJpdHktY29udC1yaWdodC13YWxsZXRcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+0JrQvtGI0LXQu9C10Lo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LXdhbGxldC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcml0eS1jb250LXJpZ2h0LXdhbGxldC1mbGV4LXZhbHl1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9WZWN0b3IgKDEyKS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx5dXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHl1dHByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL1ZlY2FzZGpnaHRvci5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L/QvtC20LXRgNGC0LLQvtCy0LDQvdC40Y9cIiAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPjxpbWcgc3JjPVwiL2ljb25zL1ZlY2FzY2FzdG9yLnN2Z1wiIC8+0J/QvtC20LXRgNGC0LLQvtCy0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJpdHk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
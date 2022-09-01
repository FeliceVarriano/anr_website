"use strict";
(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 2014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CardItem.js
var CardItem = __webpack_require__(5130);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/CardItemVideo.js



function CardItemVideo_CardItem(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: "cards__item",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_link.Link, {
                className: "cards__item__link",
                to: props.path,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "cards__item__pic-wrap",
                        "data-category": props.label,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            className: "cards__item__img",
                            alt: "Card",
                            src: props.src,
                            autoPlay: true,
                            loop: true,
                            muted: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cards__item__info",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "cards__item__text",
                            children: props.text
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const CardItemVideo = (CardItemVideo_CardItem);

;// CONCATENATED MODULE: ./src/components/Cards.js




function Cards() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cards",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Gallery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cards__container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cards__wrapper",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "cards__items",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItemVideo, {
                                    src: "/videos/ben-1.mp4",
                                    text: "Vicki & Ben",
                                    label: "Outdoor Wedding Ceremony",
                                    path: "/services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItemVideo, {
                                    src: "/videos/carol-1.mp4",
                                    text: "Carol Richer",
                                    label: "Funeral",
                                    path: "/services"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "cards__items",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItemVideo, {
                                    src: "/videos/heba-1.mp4",
                                    text: "Heba & Daniel",
                                    label: "Cultural Ceremony",
                                    path: "/services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItemVideo, {
                                    src: "/videos/heba-2.mp4",
                                    text: "Heba & Daniel",
                                    label: "Indoor Wedding Reception",
                                    path: "/services"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Cards = (Cards);

// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(6675);
;// CONCATENATED MODULE: ./src/components/HeroSection.js



function HeroSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hero-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                src: "/videos/video-1.mp4",
                autoPlay: true,
                loop: true,
                muted: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "A&R Streaming"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Quality Livestreaming Services"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hero-btns",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        className: "btns",
                        buttonStyle: "btn--outline",
                        buttonSize: "btn--large",
                        path: "/contactus",
                        children: "CONTACT US"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* Button */.z, {
                        className: "btns",
                        buttonStyle: "btn--primary",
                        buttonSize: "btn--large",
                        path: "/aboutus",
                        children: [
                            "ABOUT US ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-play-circle"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_HeroSection = (HeroSection);

;// CONCATENATED MODULE: ./pages/Home.js




function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_HeroSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cards, {})
        ]
    });
}
/* harmony default export */ const pages_Home = (Home);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664,192,130], () => (__webpack_exec__(2014)));
module.exports = __webpack_exports__;

})();
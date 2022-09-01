"use strict";
(() => {
var exports = {};
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 1670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_YoutubeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5760);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9043);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_firebase_config__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_src_firebase_config__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Profile() {
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const livestreamCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_src_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "livestreams");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const loadUrl = async ()=>{
            // Axios.get("http://localhost:3001/api/get").then((response) => {
            //   console.log(response.data[0].livestreamUrl);
            //   setUrl(response.data[0].livestreamUrl);
            // });
            const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(livestreamCollectionRef);
            console.log("data");
            const livestreams = data.docs.map((ls)=>({
                    ...ls.data()
                }));
            setUrl(livestreams[0]["livestreamUrl"]);
        };
        loadUrl();
    }, []);
    return url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                class: "btn--outline-dark",
                href: "https://stmaryscathedral.ca/mass-on-livestream/",
                style: "",
                children: "St. Mary's Mass Livestream"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LivestreamWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_YoutubeEmbed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        embedId: url
                    })
                })
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "Loading..."
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
const LivestreamWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61em;
  padding: 0 20px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_YoutubeEmbed)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/YoutubeEmbed.js




const YoutubeEmbed = ({ embedId  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "video-responsive",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Iframe, {
            src: `https://www.youtube.com/embed/${embedId}`,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded youtube"
        })
    });
YoutubeEmbed.propTypes = {
    embedId: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const components_YoutubeEmbed = (YoutubeEmbed);
const Iframe = (external_styled_components_default()).iframe`
  width: 1000px;
  height: 600px;
`;


/***/ }),

/***/ 9043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    // apiKey: "AIzaSyBZCIkFyChRZ0H5Ehbi2IG337TUJtDXv2U",
    // authDomain: "arstreaming-6a003.firebaseapp.com",
    // projectId: "arstreaming-6a003",
    // storageBucket: "arstreaming-6a003.appspot.com",
    // messagingSenderId: "576712616338",
    // appId: "1:576712616338:web:d29e1a45316468b8fdf94b",
    // measurementId: "G-SQF2JPSZMH",
    apiKey: "AIzaSyCwgjQ41a1Fvp_v5-iLeX4jxXTVX17xdf0",
    authDomain: "arstreaming-59838.firebaseapp.com",
    projectId: "arstreaming-59838",
    storageBucket: "arstreaming-59838.appspot.com",
    messagingSenderId: "483336624561",
    appId: "1:483336624561:web:7a7d7d80110f4dbc6b0590"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// Connect to Firestore
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1670));
module.exports = __webpack_exports__;

})();
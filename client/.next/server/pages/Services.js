"use strict";
(() => {
var exports = {};
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Static/HelpMeDecide.js
const questions = [
    {
        questionText: "How long is your event?",
        answerOptions: [
            {
                answerText: "4 hours"
            },
            {
                answerText: "8 hours"
            }
        ]
    },
    {
        questionText: "Do you require an audio system?",
        answerOptions: [
            {
                answerText: "Yes"
            },
            {
                answerText: "No"
            }
        ]
    },
    {
        questionText: "Do you want a more basic or comprehensive package?",
        answerOptions: [
            {
                answerText: "Core"
            },
            {
                answerText: "Comprehensive"
            }
        ]
    },
    {
        questionText: "How many cameras/focal points do you want?",
        answerOptions: [
            {
                answerText: "1 (Basic)"
            },
            {
                answerText: "2 (Premium)"
            },
            {
                answerText: "3+ (Ultimate)"
            }, 
        ]
    }, 
];

// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(6675);
// EXTERNAL MODULE: ./src/components/CardItem.js
var CardItem = __webpack_require__(5130);
;// CONCATENATED MODULE: ./pages/Services.js






function Services() {
    const { 0: currentQuestion , 1: setCurrentQuestion  } = (0,external_react_.useState)(0);
    const { 0: showScore , 1: setShowAnswers  } = (0,external_react_.useState)(false);
    const { 0: answers , 1: setAnswer  } = (0,external_react_.useState)([]);
    const { 0: showHelpMeDecideModal , 1: setShowHelpMeDecideModal  } = (0,external_react_.useState)(false);
    const handleAnswerOptionClick = (answer)=>{
        setAnswer([
            ...answers,
            answer
        ]);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowAnswers(true);
        }
    };
    const toggleHelpMeDecideModalHandler = ()=>{
        setShowHelpMeDecideModal(!showHelpMeDecideModal);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "services__cards",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cards__container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cards__wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "cards__items",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItem/* default */.Z, {
                                    src: "images/svg-image-3.svg",
                                    text: "View our 4 Hour Packages",
                                    label: "Services",
                                    path: "/services4hour"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CardItem/* default */.Z, {
                                    src: "images/svg-image-2.svg",
                                    text: "View our 8 Hour Packages",
                                    label: "Services",
                                    path: "/services8hour"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HelpMeDecideContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        class: "btn--primary btn--medium help-me-decide",
                        onClick: toggleHelpMeDecideModalHandler,
                        children: "Help Me Decide"
                    }),
                    showHelpMeDecideModal ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "popup",
                        children: showScore ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "score-section",
                            children: [
                                answers.map((txt)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: txt
                                    })),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                    className: "btns",
                                    buttonStyle: "btn--primary",
                                    buttonSize: "btn--medium",
                                    path: "/services4hour",
                                    children: "View Package!"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "question-section",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "question-count",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "Question ",
                                                        currentQuestion + 1
                                                    ]
                                                }),
                                                "/",
                                                questions.length
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "question-text",
                                            children: questions[currentQuestion].questionText
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "answer-section",
                                    children: questions[currentQuestion].answerOptions.map((answerOption)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>handleAnswerOptionClick(answerOption.answerText),
                                            children: answerOption.answerText
                                        }))
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        ]
    });
};
const Container = (external_styled_components_default()).div``;
const HelpMeDecideContainer = (external_styled_components_default()).div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;


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

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664,192,130], () => (__webpack_exec__(602)));
module.exports = __webpack_exports__;

})();
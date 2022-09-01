"use strict";
(() => {
var exports = {};
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/ContactComponent.js




const ContactComponent = ()=>{
    const form = (0,external_react_.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        external_emailjs_com_default().sendForm("service_vkxca6q", "template_bgz0k9b", e.target, "HYaMVbPXGuWv3T5Jo").then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledFormWrapper, {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledForm, {
                    onSubmit: sendEmail,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StyledHeader, {
                            children: "Contact Us!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row pt-5 mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8 form-group mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                        type: "text",
                                        className: "form-control",
                                        placeholder: "Name",
                                        name: "name"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8 form-group pt-2 mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                        type: "email",
                                        className: "form-control",
                                        placeholder: "Email Address",
                                        name: "email"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8 form-group pt-2 mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                        type: "text",
                                        className: "form-control",
                                        placeholder: "Subject",
                                        name: "subject"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8 form-group pt-2 mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledTextArea, {
                                        className: "form-control",
                                        id: "",
                                        cols: "30",
                                        rows: "8",
                                        placeholder: "Your message",
                                        name: "message"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8 pt-3 mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                                        type: "submit",
                                        className: "btn btn-info",
                                        value: "Send Message",
                                        children: "Send Message"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const GlobalStyle = external_styled_components_.createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;
const StyledHeader = (external_styled_components_default()).h3`
  color: var(--secondaryColor);
  font-weight: bold;
`;
const sharedStyles = external_styled_components_.css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledFormWrapper = (external_styled_components_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;
const StyledForm = (external_styled_components_default()).form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const StyledInput = (external_styled_components_default()).input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;
const StyledTextArea = (external_styled_components_default()).textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = (external_styled_components_default()).button`
  display: block;
  background-color: var(--primary);
  color: var(--secondaryColor);
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
const StyledFieldset = (external_styled_components_default()).fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

;// CONCATENATED MODULE: ./pages/ContactUs.js



function ContactUs() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ContactComponent, {})
    });
};


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
var __webpack_exports__ = (__webpack_exec__(292));
module.exports = __webpack_exports__;

})();
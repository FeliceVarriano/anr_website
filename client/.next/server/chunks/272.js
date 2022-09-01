"use strict";
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 6272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InfoSection_InfoSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(6675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Static/Colors.js
const mainColor = "#030359";
const secondaryColor = "#81d8d0";
const complimentaryColor = "#f9f9f9";

;// CONCATENATED MODULE: ./src/components/InfoSection/InfoElements.js


const InfoContainer = (external_styled_components_default()).div`
  color: #fff;
  background: ${({ lightBg  })=>lightBg ? complimentaryColor : secondaryColor};

  @media screen and (max-width 768px) {
    padding: 100px 0;
  }
`;
const InfoWrapper = (external_styled_components_default()).div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
const InfoRow = (external_styled_components_default()).div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart  })=>imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart  })=>imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
const Column1 = (external_styled_components_default()).div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = (external_styled_components_default()).div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
const TextWrapper = (external_styled_components_default()).div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
const TopLine = (external_styled_components_default()).p`
  color: ${({ lightText  })=>lightText ? mainColor : secondaryColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const Heading = (external_styled_components_default()).h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText  })=>lightText ? complimentaryColor : mainColor};

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
const Subtitle = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle2 = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle3 = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle4 = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle5 = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle6 = (external_styled_components_default()).p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const Subtitle7 = (external_styled_components_default()).p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText  })=>darkText ? mainColor : complimentaryColor};
`;
const BtnWrap = (external_styled_components_default()).div`
  display: flex;
  justify-content: flex-start;
`;
const ImgWrap = (external_styled_components_default()).div`
  max-width: 555px;
  height: 100%;
`;
const Img = (external_styled_components_default()).img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

;// CONCATENATED MODULE: ./src/components/InfoSection/InfoSection.js




const InfoSection = ({ lightBg , id , imgStart , topLine , lightText , headline , darkText , img , alt , description , description2 , description3 , description4 , description5 , description6 , description7 ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoContainer, {
            lightBg: lightBg,
            id: id,
            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoRow, {
                    imgStart: imgStart,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Column1, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextWrapper, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TopLine, {
                                        lightText: lightText,
                                        children: topLine
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        lightText: lightText,
                                        children: headline
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                                        darkText: darkText,
                                        children: description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle2, {
                                        darkText: darkText,
                                        children: description2
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle3, {
                                        darkText: darkText,
                                        children: description3
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle4, {
                                        darkText: darkText,
                                        children: description4
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle5, {
                                        darkText: darkText,
                                        children: description5
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle6, {
                                        darkText: darkText,
                                        children: description6
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle7, {
                                        darkText: darkText,
                                        children: description7
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Column2, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ImgWrap, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                                    src: img,
                                    alt: alt
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const InfoSection_InfoSection = (InfoSection);


/***/ })

};
;
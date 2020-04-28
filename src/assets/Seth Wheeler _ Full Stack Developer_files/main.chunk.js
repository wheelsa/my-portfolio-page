(this["webpackJsonppersonal-page-app"] = this["webpackJsonppersonal-page-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/salt-lake-city-skyline.jpg */ "./src/assets/salt-lake-city-skyline.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; }\n\nbody {\n  font-family: \"Manrope\", sans-serif;\n  color: #696969;\n  font-weight: 400;\n  line-height: 1.6; }\n\n.container {\n  display: grid;\n  grid-template-rows: 100vh min-content min-content min-content;\n  grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [full-end]; }\n\n.heading-1, .heading-2, .heading-3, .heading-4 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400; }\n\n.heading-1 {\n  font-size: 4.5rem;\n  color: #f9f7f6;\n  text-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  line-height: 1; }\n\n.heading-2 {\n  font-size: 4rem;\n  line-height: 1;\n  color: #f9f7f6;\n  text-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .heading-2--light {\n    color: #84CEEB; }\n  .heading-2--dark {\n    color: #5680E9; }\n\n.heading-3 {\n  font-size: 2.5rem;\n  color: #5AB9EA;\n  text-transform: uppercase;\n  color: #f9f7f6;\n  text-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.heading-4 {\n  font-size: 1.9rem; }\n  .heading-4--light {\n    color: #84CEEB; }\n  .heading-4--dark {\n    color: #5680E9; }\n\n.btn {\n  background-color: #5AB9EA;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  padding: 1.8rem 3rem;\n  cursor: pointer;\n  transition: all .2s; }\n  .btn:hover {\n    background-color: #5680E9; }\n\n.mb-sm {\n  margin-bottom: 2rem; }\n\n.mb-md {\n  margin-bottom: 3rem; }\n\n.mb-lg {\n  margin-bottom: 4rem; }\n\n.mb-hg {\n  margin-bottom: 8rem; }\n\n.hero {\n  background-color: #f9f7f6;\n  grid-column: full-start / full-end;\n  background-image: linear-gradient(rgba(16, 29, 44, 0.75), rgba(16, 29, 44, 0.75)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: bottom;\n  padding: 8rem;\n  padding-top: 4rem;\n  display: grid;\n  grid-template-rows: .45fr min-content min-content;\n  grid-template-columns: minmax(min-content, max-content);\n  grid-row-gap: 1.5rem;\n  row-gap: 1.5rem;\n  justify-content: center; }\n  .hero__profile {\n    height: 20rem;\n    justify-self: center;\n    align-self: center;\n    border-radius: 100px;\n    border: 2px solid white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .hero__align-center {\n    text-align: center; }\n\n.navbar {\n  background-color: #4B0082;\n  grid-column: sidebar-start / sidebar-end;\n  grid-row: 1 / -1;\n  display: flex;\n  justify-content: center; }\n\n.nav-btn {\n  border: none;\n  border-radius: 0;\n  background-color: #696969;\n  height: 2px;\n  width: 4.5rem;\n  margin-top: 4rem;\n  cursor: pointer; }\n  .nav-btn::before, .nav-btn::after {\n    background-color: #696969;\n    height: 2px;\n    width: 4.5rem;\n    content: \"\";\n    display: block; }\n  .nav-btn::before {\n    transform: translateY(-1.5rem); }\n  .nav-btn::after {\n    transform: translateY(1.3rem); }\n  @media only screen and (max-width: 62.5em) {\n    .nav-btn {\n      margin-top: 0;\n      margin-right: 3rem; }\n      .nav-btn::before {\n        transform: translateY(-1.2rem); }\n      .nav-btn::after {\n        transform: translateY(1rem); } }\n\n.about {\n  background-color: #f9f7f6;\n  grid-column: full-start / full-end;\n  grid-row: 2 / 3;\n  font-size: 2rem;\n  display: grid;\n  grid-template-columns: minmax(5rem, 1fr) minmax(60rem, 110rem) minmax(5rem, 1fr);\n  grid-template-rows: min-content 1fr 1fr; }\n  .about__header {\n    background-color: #5680E9;\n    padding: 2rem;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2; }\n  .about__headline {\n    padding: 2rem;\n    grid-column: 2 / 3;\n    grid-row: 3 / 4; }\n  .about__content {\n    padding: 2rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    text-indent: 2rem; }\n\n.testimonial-quote {\n  text-indent: 2rem; }\n\n.testimonial-quote blockquote {\n  /* Negate theme styles */\n  border: 0;\n  margin: 0;\n  padding: 0;\n  background: none;\n  color: gray;\n  font-family: Georgia, serif;\n  font-style: italic;\n  line-height: 1.4 !important;\n  margin: 0;\n  position: relative;\n  text-shadow: 0 1px white;\n  z-index: 600; }\n\n.testimonial-quote blockquote * {\n  box-sizing: border-box; }\n\n.testimonial-quote blockquote p {\n  color: #75808a;\n  line-height: 1.4 !important; }\n\n.testimonial-quote blockquote p:first-child:before {\n  content: '\\201C';\n  color: #81bedb;\n  font-size: 7.5em;\n  font-weight: 700;\n  opacity: .3;\n  position: absolute;\n  top: -.4em;\n  left: -.2em;\n  text-shadow: none;\n  z-index: -300; }\n\n.testimonial-quote cite {\n  color: gray;\n  display: block;\n  font-size: .8em; }\n\n.testimonial-quote cite span {\n  color: #5e5e5e;\n  font-size: 1em;\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0 1px white; }\n\n.testimonial-quote {\n  position: relative; }\n\n.testimonial-quote .quote-container {\n  padding-left: 160px; }\n\n.testimonial-quote.right .quote-container {\n  padding-left: 0;\n  padding-right: 160px; }\n\n.testimonial-quote.right img {\n  left: auto;\n  right: 0; }\n\n.testimonial-quote.right cite {\n  text-align: right; }\n\n.experience {\n  background-color: #f9f7f6;\n  grid-column: full-start / full-end;\n  grid-row: 3 / 4;\n  font-size: 2rem;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: min-content; }\n  .experience__header {\n    background-color: #5680E9;\n    padding: 2rem;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2; }\n  .experience-card__container {\n    grid-column: 1 / -1;\n    margin: 5vh auto 5vh auto;\n    width: 70%;\n    border: 1px solid #696969;\n    padding: 10px 30px 10px 30px;\n    border-radius: 4px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .experience-card {\n    display: grid;\n    grid-template-columns: min-content minmax(min-content, max-content) 1fr 1fr 1fr minmax(min-content, max-content);\n    align-items: center;\n    font-size: 2.5rem;\n    grid-row-gap: 1rem;\n    row-gap: 1rem; }\n    .experience-card__logo {\n      height: 4.5rem;\n      justify-self: left;\n      grid-column: 1 / 2;\n      grid-row: 1 / 2; }\n    .experience-card__company {\n      grid-row: 1 / 2;\n      grid-column: 2 / 3;\n      padding-left: 2rem;\n      justify-self: left;\n      color: #5680E9; }\n    .experience-card__title {\n      grid-row: 1 / 2;\n      grid-column: 6 / 7;\n      justify-self: right;\n      color: #4B0082;\n      font-size: 2.2rem;\n      padding-left: 2rem;\n      padding-right: 1rem; }\n    .experience-card__line {\n      border-top: 1px solid #696969;\n      grid-column: 1 / -1;\n      grid-row: 2 / 3; }\n    .experience-card__description {\n      font-style: italic;\n      grid-row: 3 / 4;\n      grid-column: 2 / -1;\n      font-size: 1.75rem; }\n    .experience-card__list {\n      color: #1E1E1E;\n      grid-row: 4 / 5;\n      grid-column: 2 / -1;\n      font-size: 1.75rem; }\n    .experience-card__list li {\n      padding: .5rem; }\n    .experience-card__date {\n      grid-row: 5 / 6;\n      grid-column: 1 / -1;\n      font-size: 1.5rem;\n      padding: 1rem; }\n\n.projects {\n  background-color: #f9f7f6;\n  grid-column: full-start / full-end;\n  grid-row: 4 / 5;\n  font-size: 2rem;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: min-content; }\n  .projects__header {\n    background-color: #5680E9;\n    padding: 2rem;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2; }\n  .projects-card__container {\n    margin: 5vh 5vw 5vh 5vw;\n    width: 35rem;\n    border: 1px solid #696969;\n    border-radius: 4px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .projects-card {\n    display: grid;\n    grid-template-columns: min-content 1fr min-content;\n    align-items: center;\n    font-size: 2.5rem;\n    grid-row-gap: 1rem;\n    row-gap: 1rem; }\n    .projects-card__image {\n      width: 100%;\n      justify-self: left;\n      grid-column: 1 / -1;\n      grid-row: 1 / 2; }\n    .projects-card__title {\n      grid-row: 2 / 3;\n      grid-column: 1 / 2;\n      padding-left: 2rem;\n      margin-top: 2rem;\n      justify-self: left;\n      color: #5680E9; }\n    .projects-card__btn {\n      grid-row: 1 / 2;\n      grid-column: 6 / 7;\n      justify-self: right;\n      color: #4B0082;\n      font-size: 2.2rem;\n      padding-left: 2rem;\n      padding-right: 1rem; }\n    .projects-card__description {\n      font-style: italic;\n      grid-row: 3 / 4;\n      grid-column: 2 / -1;\n      font-size: 1.75rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Hero/Hero */ "./src/components/Hero/Hero.jsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar/Navbar */ "./src/components/Navbar/Navbar.jsx");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/About/About */ "./src/components/About/About.jsx");
/* harmony import */ var _components_Experience_Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Experience/Experience */ "./src/components/Experience/Experience.jsx");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Projects/Projects */ "./src/components/Projects/Projects.jsx");
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/App.js";







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Experience_Experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/DellTech_Logo.png":
/*!**************************************!*\
  !*** ./src/assets/DellTech_Logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/DellTech_Logo.915ac055.png";

/***/ }),

/***/ "./src/assets/Digital-Glovebox-App.png":
/*!*********************************************!*\
  !*** ./src/assets/Digital-Glovebox-App.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Digital-Glovebox-App.22543cd1.png";

/***/ }),

/***/ "./src/assets/HiRes-Seth_Wheeler.jpg":
/*!*******************************************!*\
  !*** ./src/assets/HiRes-Seth_Wheeler.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HiRes-Seth_Wheeler.80437e4f.jpg";

/***/ }),

/***/ "./src/assets/HireVueLogo-Small.png":
/*!******************************************!*\
  !*** ./src/assets/HireVueLogo-Small.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HireVueLogo-Small.7462a593.png";

/***/ }),

/***/ "./src/assets/Liberty-mutual-insurance-logo.png":
/*!******************************************************!*\
  !*** ./src/assets/Liberty-mutual-insurance-logo.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Liberty-mutual-insurance-logo.fbf49e01.png";

/***/ }),

/***/ "./src/assets/US-army-logo.jpg":
/*!*************************************!*\
  !*** ./src/assets/US-army-logo.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/US-army-logo.1befcbf2.jpg";

/***/ }),

/***/ "./src/assets/salt-lake-city-skyline.jpg":
/*!***********************************************!*\
  !*** ./src/assets/salt-lake-city-skyline.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/salt-lake-city-skyline.61d23073.jpg";

/***/ }),

/***/ "./src/components/About/About.jsx":
/*!****************************************!*\
  !*** ./src/components/About/About.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/components/About/About.jsx";


const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "I\u2019ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns \u2014 from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur \u2014 I've never stopped engaging my passion to help others and solve problems. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I\u2019m excited to make a big impact at a high growth company.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "about__headline testimonial-quote group right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "quote-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Seth is an outstanding leader who capitalizes on every opportunity to make those around him better. He consistently exchanges ideas across our organization, gladly helps my other multi-talented leaders with their challenging projects, admits when he\u2019s made a mistake, and (most importantly) lives the Army values and treats everyone with respect.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Tim Lynch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), "Lieutenant Colonel", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), "US Army, Field Artillery")))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Experience/Experience.jsx":
/*!**************************************************!*\
  !*** ./src/components/Experience/Experience.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_HireVueLogo_Small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/HireVueLogo-Small.png */ "./src/assets/HireVueLogo-Small.png");
/* harmony import */ var _assets_HireVueLogo_Small_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_HireVueLogo_Small_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_DellTech_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/DellTech_Logo.png */ "./src/assets/DellTech_Logo.png");
/* harmony import */ var _assets_DellTech_Logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_DellTech_Logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Liberty_mutual_insurance_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Liberty-mutual-insurance-logo.png */ "./src/assets/Liberty-mutual-insurance-logo.png");
/* harmony import */ var _assets_Liberty_mutual_insurance_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_Liberty_mutual_insurance_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_US_army_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/US-army-logo.jpg */ "./src/assets/US-army-logo.jpg");
/* harmony import */ var _assets_US_army_logo_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_US_army_logo_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/components/Experience/Experience.jsx";






const Experience = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_HireVueLogo_Small_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "HireVue Logo",
    className: "experience-card__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "HireVue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Sr. Field Marketing Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Video Interviewing and Hiring Assessments Platform"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "experience-card__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, " Accomplishment 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, " Accomplishment 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, " Accomplishment 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "July 2019 - January 2020 | South Jordan, Utah"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_DellTech_Logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Dell Technologies Logo",
    className: "experience-card__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Dell Technologies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Vertical Marketing Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "North America Field and Partner Marketing: State and Local Government (SLG) Vertical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "experience-card__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, " ", "Awarded Dell Champion on annual review among six peers; award given to the top performer of each team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, " ", "Contributed to an increase in marketing pipeline by 95% year over year with 42% of pipeline converted to revenue; managed an annual marketing budget of $500 thousand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, " ", "Partnered with product, sales, marketing and strategically aligned businesses to develop message for helping governments achieve their digital transformation in cybersecurity, public safety, and multi-cloud"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, " ", "Drove content strategy, development and execution in the SLG vertical to maximize awareness, drive demand generation, and enable sales; marketing campaign featured content across the customer journey and the sales funnel", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "July 2018 - July 2019 | Round Rock, Texas"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_Liberty_mutual_insurance_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Liberty Mutual Logo",
    className: "experience-card__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Liberty Mutual Insurance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Corporate Development Program Associate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Global Consumer Markets (GCM): East|West Finance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "experience-card__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, " ", "Partnered cross-functionally to streamline and standardize monthly reporting across nine countries in GCM East; new process generated insights for Chief Operating Officer of GCM East and created efficiencies for local operations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, " ", "Analyzed quantitative data and stakeholder discussions across 13 East|West countries to conduct a current state analysis of the Global Internal Audit Function; analysis presented to the head of Internal Audit to inform global strategy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "June 2017 - September 2017 | Boston, Massachusets"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_US_army_logo_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "United States Army Logo",
    className: "experience-card__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "U.S. Army"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "experience-card__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Senior Operations and Logistics Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-card__line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "Planned and resourced operations for organizations of up to 700 individuals; consistently chosen ahead of peer groups to lead organizations composed of up to 120 individuals."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "experience-card__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, " ", "Planned, resourced and orchestrated a 120-person organization\u2019s deployment to a national training; partnered with directors across two external organizations to integrate organization successfully during exercise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, " ", "Chosen over four peers to lead the organization as the Senior Operations Manager during exercise; resulted in a 300% increase in the organization\u2019s measurable efficiency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "Prepared and led four teams totaling 19-persons; integrated and coordinated teams in support of an organization of 4,400 for a national training exercise; teams had a success rating 150% above nearest peer team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, " ", "Collaborated with international counterparts to execute the movement, resupply, maintenance, and sustainment for over 700 New Zealand, U.S. and Tongan Soldiers, resulting in the successful execution of a 30-day operation", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, " ", "Founded and led a diverse team of 35 employees over a six-month training period in preparation for a deployment to Afghanistan to conduct security operations in a combat environment; team rated #1 out of 7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "experience-card__date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "May 2011 - September 2016 | Oahu, Hawaii and Joint Base Lewis McChord, Washington"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/components/Hero/Hero.jsx":
/*!**************************************!*\
  !*** ./src/components/Hero/Hero.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_HiRes_Seth_Wheeler_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/HiRes-Seth_Wheeler.jpg */ "./src/assets/HiRes-Seth_Wheeler.jpg");
/* harmony import */ var _assets_HiRes_Seth_Wheeler_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_HiRes_Seth_Wheeler_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/components/Hero/Hero.jsx";



const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Purpose Driven Software Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_HiRes_Seth_Wheeler_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Seth Wheeler's Profile",
    className: "hero__profile mb-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading-2 heading-2 hero__align-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, " Seth Wheeler "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "heading-3 heading-3 hero__align-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, " Software Engineer | Veteran "));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/components/Navbar/Navbar.jsx";


const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    class: "nav-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Projects/Projects.jsx":
/*!**********************************************!*\
  !*** ./src/components/Projects/Projects.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Digital_Glovebox_App_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Digital-Glovebox-App.png */ "./src/assets/Digital-Glovebox-App.png");
/* harmony import */ var _assets_Digital_Glovebox_App_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_Digital_Glovebox_App_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/components/Projects/Projects.jsx";



const Projects = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects-card__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_Digital_Glovebox_App_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "HireVue Logo",
    className: "projects-card__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "projects-card__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Digital Glovebox")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Seth/Desktop/personal_page/personal-page-app/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Seth/Desktop/personal_page/personal-page-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Seth/Desktop/personal_page/personal-page-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Seth/Desktop/personal_page/personal-page-app/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
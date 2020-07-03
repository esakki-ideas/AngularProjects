(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);"]);
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css);"]);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);"]);
// Module
exports.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\n.board{\n    width: 75%;\n    margin: 60px auto;\n    height: 500px;\n    background: #fff;\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n}\n.board .nav-tabs {\n    position: relative;\n    /* border-bottom: 0; */\n    /* width: 80%; */\n    margin: 40px auto;\n    margin-bottom: 0;\n    box-sizing: border-box;\n\n}\n.board > div.board-inner{\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n    background-size: 30%;\n}\np.narrow{\n    width: 60%;\n    margin: 10px auto;\n}\n.liner{\n    height: 2px;\n    background: #ddd;\n    position: absolute;\n    width: 80%;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 50%;\n    z-index: 1;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n    color: #555555;\n    cursor: default;\n    /* background-color: #ffffff; */\n    border: 0;\n    border-bottom-color: transparent;\n}\nspan.round-tabs{\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n    display: inline-block;\n    border-radius: 100px;\n    background: white;\n    z-index: 2;\n    position: absolute;\n    left: 0;\n    text-align: center;\n    font-size: 25px;\n}\nspan.round-tabs.one{\n    color: rgb(34, 194, 34);border: 2px solid rgb(34, 194, 34);\n}\nli.active span.round-tabs.one{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: rgb(34, 194, 34);\n}\nspan.round-tabs.two{\n    color: #febe29;border: 2px solid #febe29;\n}\nli.active span.round-tabs.two{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #febe29;\n}\nspan.round-tabs.three{\n    color: #3e5e9a;border: 2px solid #3e5e9a;\n}\nli.active span.round-tabs.three{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #3e5e9a;\n}\nspan.round-tabs.four{\n    color: #f1685e;border: 2px solid #f1685e;\n}\nli.active span.round-tabs.four{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #f1685e;\n}\nspan.round-tabs.five{\n    color: #999;border: 2px solid #999;\n}\nli.active span.round-tabs.five{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #999;\n}\n.nav-tabs > li.active > a span.round-tabs{\n    background: #fafafa;\n}\n.nav-tabs > li {\n    /*width: 20%;*/\n    width: 25%;\n}\n/*li.active:before {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n    opacity:0;\n    margin: 0 auto;\n    bottom: -2px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    z-index: 1;\n    transition:0.2s ease-in-out;\n}*/\n.nav-tabs > li:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:0;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 5px solid transparent;\n    border-bottom-color: #ddd;\n    transition:0.1s ease-in-out;\n    \n}\n.nav-tabs > li.active:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:1;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 10px solid transparent;\n    border-bottom-color: #ddd;\n    \n}\n.nav-tabs > li a{\n   width: 70px;\n   height: 70px;\n   margin: 20px auto;\n   border-radius: 100%;\n   padding: 0;\n}\n.nav-tabs > li a:hover{\n    background: transparent;\n}\n.tab-content .tab-pane{\n   position: relative;\npadding-top: 50px;\n}\n.tab-content .head{\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 25px;\n    text-transform: uppercase;\n    padding-bottom: 10px;\n}\n.btn-outline-rounded{\n    padding: 10px 40px;\n    margin: 20px 0;\n    border: 2px solid transparent;\n    border-radius: 25px;\n}\n.btn.green{\n    background-color:#5cb85c;\n    /*border: 2px solid #5cb85c;*/\n    color: #ffffff;\n}\n@media( max-width : 585px ){\n    \n    .board {\nwidth: 90%;\nheight:auto !important;\n}\n    span.round-tabs {\n        font-size:16px;\nwidth: 50px;\nheight: 50px;\nline-height: 50px;\n    }\n    .tab-content .head{\n        font-size:20px;\n        }\n    .nav-tabs > li a {\nwidth: 50px;\nheight: 50px;\nline-height:50px;\n}\n\n.nav-tabs > li.active:after {\ncontent: \" \";\nposition: absolute;\nleft: 35%;\n}\n\n.btn-outline-rounded {\n    padding:12px 20px;\n    }\n}\n.btn-default {\n    border-color: #ccc;\n}\n.tab-content .choice {\n  text-align: center;\n  cursor: pointer;\n  margin-top: 38px;\n}\n.tab-content .choice i {\n    font-size: 32px;\n    line-height: 55px;\n}\n.btn-radio {\n\twidth: 100%;\n}\n.img-radio {\n\topacity: 0.8;\n\tmargin-bottom: 5px;\n}\n.space-20 {\n    margin-top: 20px;\n}\n/* active buttons */\n#status-buttons a.active span.round-tabs.one { \n    background: rgb(34, 194, 34); \n    color: #fff\n}\n#status-buttons a.active span.round-tabs.two { \n    background: #febe29; \n    color: #fff\n}\n#status-buttons a.active span.round-tabs.three { \n    background: #3e5e9a; \n    color: #fff\n}\n#status-buttons a.active span.round-tabs.four { \n    background: #f1685e; \n    color: #fff\n}\n.iradio_buttons {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    background: #febe29 no-repeat;\n    border: none;\n    cursor: pointer;\n}\n.iradio_buttons {\n    background-position: -120px 0;\n}\n.iradio_buttons.hover {\n    background-position: -144px 0;\n}\n.iradio_buttons.checked {\n    background-position: -168px 0;\n}\n.tab-content .tab-pane{\n    padding-top: 20px;\n}\n.alert {\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n.splash {\n    position: absolute;\n    z-index: 2000;\n    background: white;\n    color: gray;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0\n}\n.splash-title {\n    text-align: center;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 20px\n}\n.splash-title h1{\n    font-size: 26px\n}\n.color-line {\n    border-radius:4px 4px 0 0\n}", "",{"version":3,"sources":["/home/ubuntu/Documents/project/angular-project/user-modules/user-modules/src/styles.scss","assets/css/riliwan-rabo.css","assets/css/style.css","assets/css/form.css","assets/css/loading-bars.css"],"names":[],"mappings":";AAAA,8EAAA;ACCA,mEAAmE;AACnE;IACI,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,8CAA8C;AAClD;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;;AAE1B;AAEA;IACI,yEAAyE;IACzE,oBAAoB;AACxB;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,OAAO;IACP,QAAQ;IACR,QAAQ;IACR,UAAU;AACd;AAEA;IACI,cAAc;IACd,eAAe;IACf,+BAA+B;IAC/B,SAAS;IACT,gCAAgC;AACpC;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,kBAAkB;IAClB,eAAe;AACnB;AAEA;IACI,uBAAuB,CAAC,kCAAkC;AAC9D;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,uBAAuB;AAC3B;AAEA;IACI,cAAc,CAAC,yBAAyB;AAC5C;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,cAAc;AAClB;AAEA;IACI,cAAc,CAAC,yBAAyB;AAC5C;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,cAAc;AAClB;AAEA;IACI,cAAc,CAAC,yBAAyB;AAC5C;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,cAAc;AAClB;AAEA;IACI,WAAW,CAAC,sBAAsB;AACtC;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,WAAW;AACf;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,UAAU;AACd;AACA;;;;;;;;;;;EAWE;AACF;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;GACV,SAAS;IACR,cAAc;IACd,WAAW;IACX,6BAA6B;IAC7B,yBAAyB;IACzB,2BAA2B;;AAE/B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;GACV,SAAS;IACR,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,yBAAyB;;AAE7B;AACA;GACG,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;GACnB,UAAU;AACb;AAEA;IACI,uBAAuB;AAC3B;AAEA;GACG,kBAAkB;AACrB,iBAAiB;AACjB;AACA;IACI,2CAA2C;IAC3C,eAAe;IACf,yBAAyB;IACzB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,6BAA6B;IAC7B,mBAAmB;AACvB;AAEA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,cAAc;AAClB;AAIA;;IAEI;AACJ,UAAU;AACV,sBAAsB;AACtB;IACI;QACI,cAAc;AACtB,WAAW;AACX,YAAY;AACZ,iBAAiB;IACb;IACA;QACI,cAAc;QACd;IACJ;AACJ,WAAW;AACX,YAAY;AACZ,gBAAgB;AAChB;;AAEA;AACA,YAAY;AACZ,kBAAkB;AAClB,SAAS;AACT;;AAEA;IACI,iBAAiB;IACjB;AACJ;AC9NA;IACI,kBAAkB;AACtB;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;CACC,WAAW;AACZ;AACA;CACC,YAAY;CACZ,kBAAkB;AACnB;AAEA;IACI,gBAAgB;AACpB;AAEA,mBAAmB;AACnB;IACI,4BAA4B;IAC5B;AACJ;AAEA;IACI,mBAAmB;IACnB;AACJ;AAEA;IACI,mBAAmB;IACnB;AACJ;AAEA;IACI,mBAAmB;IACnB;AACJ;AAGA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,6BAA6B;AACjC;ACpEA;IACI,iBAAiB;AACrB;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;AAEA;EACE,8BAA8B,EAAE,UAAU;AAC5C;AACA;EACE,8BAA8B,EAAE,QAAQ;AAC1C;ACdA;IACI,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,MAAM;IACN,SAAS;IACT,OAAO;IACP;AACJ;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB;AACJ;AAEA;IACI;AACJ;AAEA;IACI;AACJ","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url(\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\");\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css\");\n@import \"assets/css/riliwan-rabo.css\";\n@import \"assets/css/style.css\";\n@import \"assets/css/form.css\";\n@import \"assets/css/loading-bars.css\";","@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);\n/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\n.board{\n    width: 75%;\n    margin: 60px auto;\n    height: 500px;\n    background: #fff;\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n}\n.board .nav-tabs {\n    position: relative;\n    /* border-bottom: 0; */\n    /* width: 80%; */\n    margin: 40px auto;\n    margin-bottom: 0;\n    box-sizing: border-box;\n\n}\n\n.board > div.board-inner{\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n    background-size: 30%;\n}\n\np.narrow{\n    width: 60%;\n    margin: 10px auto;\n}\n\n.liner{\n    height: 2px;\n    background: #ddd;\n    position: absolute;\n    width: 80%;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 50%;\n    z-index: 1;\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n    color: #555555;\n    cursor: default;\n    /* background-color: #ffffff; */\n    border: 0;\n    border-bottom-color: transparent;\n}\n\nspan.round-tabs{\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n    display: inline-block;\n    border-radius: 100px;\n    background: white;\n    z-index: 2;\n    position: absolute;\n    left: 0;\n    text-align: center;\n    font-size: 25px;\n}\n\nspan.round-tabs.one{\n    color: rgb(34, 194, 34);border: 2px solid rgb(34, 194, 34);\n}\n\nli.active span.round-tabs.one{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: rgb(34, 194, 34);\n}\n\nspan.round-tabs.two{\n    color: #febe29;border: 2px solid #febe29;\n}\n\nli.active span.round-tabs.two{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #febe29;\n}\n\nspan.round-tabs.three{\n    color: #3e5e9a;border: 2px solid #3e5e9a;\n}\n\nli.active span.round-tabs.three{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #3e5e9a;\n}\n\nspan.round-tabs.four{\n    color: #f1685e;border: 2px solid #f1685e;\n}\n\nli.active span.round-tabs.four{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #f1685e;\n}\n\nspan.round-tabs.five{\n    color: #999;border: 2px solid #999;\n}\n\nli.active span.round-tabs.five{\n    background: #fff !important;\n    border: 2px solid #ddd;\n    color: #999;\n}\n\n.nav-tabs > li.active > a span.round-tabs{\n    background: #fafafa;\n}\n.nav-tabs > li {\n    /*width: 20%;*/\n    width: 25%;\n}\n/*li.active:before {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n    opacity:0;\n    margin: 0 auto;\n    bottom: -2px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    z-index: 1;\n    transition:0.2s ease-in-out;\n}*/\n.nav-tabs > li:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:0;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 5px solid transparent;\n    border-bottom-color: #ddd;\n    transition:0.1s ease-in-out;\n    \n}\n.nav-tabs > li.active:after {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n   opacity:1;\n    margin: 0 auto;\n    bottom: 0px;\n    border: 10px solid transparent;\n    border-bottom-color: #ddd;\n    \n}\n.nav-tabs > li a{\n   width: 70px;\n   height: 70px;\n   margin: 20px auto;\n   border-radius: 100%;\n   padding: 0;\n}\n\n.nav-tabs > li a:hover{\n    background: transparent;\n}\n\n.tab-content .tab-pane{\n   position: relative;\npadding-top: 50px;\n}\n.tab-content .head{\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 25px;\n    text-transform: uppercase;\n    padding-bottom: 10px;\n}\n.btn-outline-rounded{\n    padding: 10px 40px;\n    margin: 20px 0;\n    border: 2px solid transparent;\n    border-radius: 25px;\n}\n\n.btn.green{\n    background-color:#5cb85c;\n    /*border: 2px solid #5cb85c;*/\n    color: #ffffff;\n}\n\n\n\n@media( max-width : 585px ){\n    \n    .board {\nwidth: 90%;\nheight:auto !important;\n}\n    span.round-tabs {\n        font-size:16px;\nwidth: 50px;\nheight: 50px;\nline-height: 50px;\n    }\n    .tab-content .head{\n        font-size:20px;\n        }\n    .nav-tabs > li a {\nwidth: 50px;\nheight: 50px;\nline-height:50px;\n}\n\n.nav-tabs > li.active:after {\ncontent: \" \";\nposition: absolute;\nleft: 35%;\n}\n\n.btn-outline-rounded {\n    padding:12px 20px;\n    }\n}\n",".btn-default {\n    border-color: #ccc;\n}\n\n.tab-content .choice {\n  text-align: center;\n  cursor: pointer;\n  margin-top: 38px;\n}\n\n.tab-content .choice i {\n    font-size: 32px;\n    line-height: 55px;\n}\n\n.btn-radio {\n\twidth: 100%;\n}\n.img-radio {\n\topacity: 0.8;\n\tmargin-bottom: 5px;\n}\n\n.space-20 {\n    margin-top: 20px;\n}\n\n/* active buttons */\n#status-buttons a.active span.round-tabs.one { \n    background: rgb(34, 194, 34); \n    color: #fff\n}\n\n#status-buttons a.active span.round-tabs.two { \n    background: #febe29; \n    color: #fff\n}\n\n#status-buttons a.active span.round-tabs.three { \n    background: #3e5e9a; \n    color: #fff\n}\n\n#status-buttons a.active span.round-tabs.four { \n    background: #f1685e; \n    color: #fff\n}\n\n\n.iradio_buttons {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    background: #febe29 no-repeat;\n    border: none;\n    cursor: pointer;\n}\n.iradio_buttons {\n    background-position: -120px 0;\n}\n.iradio_buttons.hover {\n    background-position: -144px 0;\n}\n.iradio_buttons.checked {\n    background-position: -168px 0;\n}",".tab-content .tab-pane{\n    padding-top: 20px;\n}\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n",".splash {\n    position: absolute;\n    z-index: 2000;\n    background: white;\n    color: gray;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0\n}\n\n.splash-title {\n    text-align: center;\n    max-width: 500px;\n    margin: 15% auto;\n    padding: 20px\n}\n\n.splash-title h1{\n    font-size: 26px\n}\n\n.color-line {\n    border-radius:4px 4px 0 0\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/Documents/project/angular-project/user-modules/user-modules/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
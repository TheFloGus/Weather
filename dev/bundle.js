/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_img_15_00_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/img/15.00.webp */ \"./src/components/img/15.00.webp\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_components_img_15_00_webp__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n\\tbox-sizing: border-box;\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tfont-family: 'Oswald', sans-serif;;\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\nbody{\\r\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n\\tbackground-size: cover;\\r\\n\\tbackground-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.wrap {\\r\\n\\twidth: 100%;\\r\\n\\tmin-height: 100vh;\\r\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n\\tbackground-size: cover;\\r\\n\\tbackground-repeat: no-repeat;\\r\\n\\tmargin: 0 auto;\\r\\n\\ttransition: all 1s ease;\\r\\n}\\r\\n\\r\\n.container {\\r\\n\\twidth: 80%;\\r\\n\\tmargin: 0 auto;\\r\\n\\tpadding: 30px;\\r\\n}\\r\\n\\r\\n.form{\\r\\n\\tdisplay: flex;\\r\\n\\twidth: 100%;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n\\r\\n.form__input {\\r\\n\\twidth: 50%;\\r\\n\\theight: 50px;\\r\\n\\tbackground-color: rgba(37, 150, 190, 0.1);\\r\\n\\tborder-radius: 20px;\\r\\n\\tpadding: 20px;\\r\\n\\tborder: 3px solid rgb(37, 150, 190);\\r\\n\\ttransition: all 1s ease;\\r\\n}\\r\\n\\r\\n.form__input::placeholder{\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n.form__input:hover{\\r\\n\\tbackground-color: rgba(59, 169, 209, 0.336);\\r\\n}\\r\\n\\r\\n.form__input:focus{\\r\\n\\toutline: none;\\r\\n}\\r\\n\\r\\n.form__btn{\\r\\n\\tbackground-color: rgba(37, 150, 190, 0.1);\\r\\n\\tborder: none;\\r\\n\\tpadding: 14px;\\r\\n\\tborder-radius: 20px;\\r\\n\\tcursor: pointer;\\r\\n\\ttransition: all 1s ease;\\r\\n\\tborder: 3px solid rgb(37, 150, 190);\\r\\n}\\r\\n\\r\\n.form__btn:hover{\\r\\n\\tbackground-color: rgba(59, 169, 209, 0.336);\\r\\n}\\r\\n\\r\\n.form__btn:active{\\r\\n\\tposition: relative;\\r\\n\\ttop: 1px;\\r\\n}\\r\\n\\r\\n.data {\\r\\n\\tmargin-top: 50px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\n.weather{\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\n.temperature {\\r\\n\\tfont-size: 50px;\\r\\n}\\r\\n\\r\\n.location {\\r\\n\\tmargin-top: 10px;\\r\\n\\tfont-size: 20px;\\r\\n}\\r\\n\\r\\n.data__items {\\r\\n\\tmargin-top: 50px;\\r\\n\\twidth: 70%;\\r\\n\\tbackground-color: rgba(37, 150, 190, 0.5);\\r\\n\\tborder-radius: 20px;\\r\\n\\tpadding: 20px;\\r\\n}\\r\\n\\r\\n.error {\\r\\n\\tfont-size: 35px;\\r\\n\\tmargin-top: 50px;\\r\\n}\\r\\n\\r\\n.data__list{\\r\\n\\twidth: 100%;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.data__item{\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n\\twidth: 33%;\\r\\n\\theight: 200px;\\r\\n\\tlist-style: none;\\r\\n\\tpadding: 20px;\\r\\n\\tfont-size: 27px;\\r\\n}\\r\\n\\r\\n.data__text{\\r\\n\\tmargin-top: 10px;\\r\\n}\\r\\n\\r\\n.data__item::before{\\r\\n\\tcontent: '';\\r\\n\\tposition: relative;\\r\\n\\ttop: 23%;\\r\\n    left: 62%;\\r\\n    width: 1px;\\r\\n    height: 25px;\\r\\n\\tbackground-color: rgb(25, 89, 112);\\r\\n\\tborder-radius: 2px;\\r\\n}\\r\\n\\r\\n.data__item.ex{\\r\\n\\tposition: relative;\\r\\n\\ttop: 10px;\\r\\n}\\r\\n\\r\\n.data__item.ex::before{\\r\\n\\tcontent: '';\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.history__list {\\r\\n\\tdisplay: flex;\\r\\n\\tlist-style: none;\\r\\n\\tfont-size: 20px;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n.history__item {\\r\\n\\tdisplay: flex;\\r\\n\\tpadding: 10px;\\r\\n\\twidth: 16%;\\r\\n}\\r\\n\\r\\n.history__item::before{\\r\\n\\tcontent: '';\\r\\n\\tposition: relative;\\r\\n\\ttop: 23%;\\r\\n    left: 103%;\\r\\n    width: 1px;\\r\\n    height: 25px;\\r\\n\\tbackground-color: rgb(25, 89, 112);\\r\\n\\tborder-radius: 2px;\\r\\n}\\r\\n\\r\\n.history__item:last-child::before{\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.line {\\r\\n\\twidth: 97%;\\r\\n    margin: 0 auto;\\r\\n    height: 1px;\\r\\n    background-color: rgb(25, 89, 112);\\r\\n}\\r\\n\\r\\n.line:last-child{\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.clearHistory{\\r\\n\\tdisplay: block;\\r\\n\\tmargin: 20px auto;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tms/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tms/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://tms/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/components/img/15.00.webp":
/*!***************************************!*\
  !*** ./src/components/img/15.00.webp ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"722832f0a8344817c40797a9d5978a28.webp\");\n\n//# sourceURL=webpack://tms/./src/components/img/15.00.webp?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tms/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tms/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/display.js":
/*!***********************************!*\
  !*** ./src/components/display.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const area = document.querySelector('#data')\nconst {setLocal} = __webpack_require__(/*! ./weatherObject */ \"./src/components/weatherObject.js\")\n\nfunction printData(data){\n\tarea.innerHTML = ''\n\t\treturn area.insertAdjacentHTML('afterbegin', \n\t\t`\n\t\t<div class=\"weather\">\n\t\t\t<h1 class=\"temperature\">${data.temperature}C</h1>\n\t\t\t<p class=\"location\">${data.location}</p>\n\t\t</div>\n\n\t\t<div class=\"data__items\">\n\t\t\t<ul class=\"data__list\">\n\t\t\t\t<li class=\"data__item\">\n\t\t\t\t\t<h2 class=\"data__header\" >Time</h2>\n\t\t\t\t\t<p class=\"data__text\" id='localtime'>${data.time}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"data__item\">\n\t\t\t\t\t<h2 class=\"data__header\">Feels like</h2>\n\t\t\t\t\t<p class=\"data__text\" id='feelslike'>${data.feelsLike}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"data__item ex\">\n\t\t\t\t\t<h2 class=\"data__header\">Today is </h2>\n\t\t\t\t\t<p class=\"data__text\" id='weather_descriptions'>${data.weatherDescriptions}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"data__item\">\n\t\t\t\t\t<h2 class=\"data__header\">Wind</h2>\n\t\t\t\t\t<p class=\"data__text\" id='wind_dir'>l${data.windDir}</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"data__item\">\n\t\t\t\t\t<h2 class=\"data__header\">Speed</h2>\n\t\t\t\t\t<p class=\"data__text\" id='wind_speed'>${data.windSpeed} Km/h</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"data__item ex\">\n\t\t\t\t\t<h2 class=\"data__header\">Pressure</h2>\n\t\t\t\t\t<p class=\"data__text\" id='pressure'>${data.pressure} MB</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t`)\n}\n\nfunction printError(message = 'Ooops! Something went wrong'){\n\tarea.innerHTML = '';\n\treturn area.insertAdjacentHTML('afterbegin', `\n\t<div class=\"data__items error\">\n\t\t<h2>${message}</h2>\n\t</div>\n\t`)\n}\n\nfunction changeBG(data){\n\tconst {time} = data;\n\tlet hours = time[0]+time[1]\n\tif (hours === '00'){\n\t\thours = '24'\n\t}\n\tconst wrap = document.querySelector('.wrap');\n\t\twrap.style.backgroundImage = `url(./img/${hours}.00.webp)`\n}\n\nfunction printHistory(history){\n\tconst historyArea = document.querySelector('.data__items')\n\thistoryArea.innerHTML = '';\n\thistoryArea.insertAdjacentHTML('afterbegin', `\n\t\t<ul class = \"history__list\">\n\t\t\t<li class = \"history__item\">Location</li>\n\t\t\t<li class = \"history__item\">Temperature</li>\n\t\t\t<li class = \"history__item\">Time</li>\n\t\t\t<li class = \"history__item\">Day was</li>\n\t\t\t<li class = \"history__item\">Wind direction</li>\n\t\t\t<li class = \"history__item\">Pressure</li>\n\t\t</ul>\n\t\t<div class = 'line'></div> \n\t`)\n\n\thistory.forEach(item => {\n\t\thistoryArea.insertAdjacentHTML('beforeend', `\n\t\t<ul class = \"history__list\">\n\t\t\t<li class = \"history__item\">${item.location}</li>\n\t\t\t<li class = \"history__item\">${item.temperature}</li>\n\t\t\t<li class = \"history__item\">${item.time }</li>\n\t\t\t<li class = \"history__item\">${item.weatherDescriptions }</li>\n\t\t\t<li class = \"history__item\">${item.windDir}</li>\n\t\t\t<li class = \"history__item\">${item.pressure }</li>\n\t\t</ul>\n\t\t<div class = 'line'></div> \n\t`)\n\t});\n\n\thistoryArea.insertAdjacentHTML('beforeend', `\n\t\t<button id = 'clearHistory' class = 'form__btn clearHistory'>Clear all</button>\n\t`);\n\n\tdocument.querySelector('#clearHistory').addEventListener('click', e => {\n\t\te.preventDefault();\n\t\tconsole.log(e);\n\t\thistory.splice(0,history.length)\n\t\tprintHistory(history);\n\t\tsetLocal(history);\n\t})\n}\n\nmodule.exports = {printData, printError, changeBG, printHistory}\n\n//# sourceURL=webpack://tms/./src/components/display.js?");

/***/ }),

/***/ "./src/components/images.js":
/*!**********************************!*\
  !*** ./src/components/images.js ***!
  \**********************************/
/***/ ((module) => {

eval("const sources = [];\n\nfor (let i = 1; i<=24; i++){\n\tlet str = ''\n\tif(i<10){\n\t\t str = `./img/0${i}.00.webp`\n\t}else{\n\t\t str = `./img/${i}.00.webp`\n\t}\n\tsources.push(str);\n}\n\nfunction preloadImages(srcs) {\n    if (!preloadImages.cache) {\n        preloadImages.cache = [];\n    }\n    let img;\n    for (let i = 0; i < srcs.length; i++) {\n        // eslint-disable-next-line no-undef\n        img = new Image();\n        img.src = srcs[i];\n        preloadImages.cache.push(img);\n    }\n}\n\npreloadImages(sources);\n\nmodule.exports = preloadImages;\n\n\n//# sourceURL=webpack://tms/./src/components/images.js?");

/***/ }),

/***/ "./src/components/weatherObject.js":
/*!*****************************************!*\
  !*** ./src/components/weatherObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("function WeatherInfo(data){\n\tthis.location = `${data.location.name} , ${data.location.country}`;\n\tthis.temperature = data.current.temperature;\n\tconst newTime = data.location.localtime.split(\" \")[1];\n\tthis.time = newTime;\n\tthis.feelsLike = data.current.feelslike;\n\tthis.weatherDescriptions = data.current.weather_descriptions;\n\tthis.windDir = data.current.wind_dir;\n\tthis.windSpeed = data.current.wind_speed;\n\tthis.pressure = data.current.pressure;\n}\n\nfunction updateHistory(data, history){\n\thistory.unshift(data);\n\tif(history.length > 5){\n\t\thistory.pop();\n\t}\n}\n\nfunction setLocal (weather){\n\tlocalStorage.setItem('history', JSON.stringify(weather))\n}\n\nfunction getLocal (){\n\tlet history = []\n\tif(localStorage.getItem('history')){\n\t\thistory = JSON.parse(localStorage.getItem('history'))\n\t}\n\treturn history\n}\n\nmodule.exports = {WeatherInfo, updateHistory, setLocal, getLocal}\n\n//# sourceURL=webpack://tms/./src/components/weatherObject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// eslint-disable-next-line import/extensions\r\n\r\n\r\nconst {WeatherInfo, updateHistory, setLocal, getLocal} = __webpack_require__(/*! ./components/weatherObject */ \"./src/components/weatherObject.js\")\r\nconst {printData, printError, changeBG, printHistory} = __webpack_require__(/*! ./components/display */ \"./src/components/display.js\")\r\n// eslint-disable-next-line no-unused-vars\r\nconst preloadImages = __webpack_require__(/*! ./components/images */ \"./src/components/images.js\")\r\n\r\nconst btn = document.querySelector('#button')\r\nconst input = document.querySelector('#input')\r\nlet put = '';\r\nconst reg = /[^a-zA-Z\\s-_]/;\r\nconst history = getLocal();\r\n\r\n\r\n\r\nfunction getWeather (city){\r\n    fetch(`http://api.weatherstack.com/current?access_key=8772fea4141d1c4198f6acc85d845033&query=${city}`)\r\n    .then (r => r.json())\r\n    .then(data => {\r\n\t\tif(data.success === false){\r\n\t\t\tprintError('There is no such city')\r\n\t\t}else{\r\n\t\t\tconst currentWeather = new WeatherInfo(data);\r\n\t\t\tprintData(currentWeather);\r\n\t\t\tchangeBG(currentWeather);\r\n\t\t\tupdateHistory(currentWeather, history);\r\n\t\t\tsetLocal(history);\r\n\t\t}\r\n\t})\r\n\t.catch(err=>printError(err))\r\n}\r\n\r\nnavigator.geolocation.getCurrentPosition(position => {\r\n\tgetWeather((`${position.coords.latitude  },${  position.coords.longitude}`))\r\n});\r\n\r\nbtn.addEventListener('click', e => {\r\n\te.preventDefault();\r\n\r\n\tif(input.value){\r\n\t\tput = input.value;\r\n\t}else {\r\n\t\tnavigator.geolocation.getCurrentPosition(position => {\r\n\t\t\tgetWeather((`${position.coords.latitude  },${  position.coords.longitude}`))\r\n\t\t});\r\n\t}\r\n\r\n\tif (!reg.test(put)){\r\n\t\tgetWeather(put)\r\n\t}else {\r\n\t\tprintError();\r\n\t}\r\n})\r\n\r\ninput.addEventListener(\"keypress\", e => {\r\n\t\r\n\tif (e.key === 'Enter') {\r\n\t\tif(input.value){\r\n\t\t\tput = input.value;\r\n\t\t}else {\r\n\t\t\tnavigator.geolocation.getCurrentPosition(position => {\r\n\t\t\t\tgetWeather((`${position.coords.latitude  } , ${  position.coords.longitude}`))\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif (!reg.test(put) && input.value){\r\n\t\t\tgetWeather(put)\r\n\t\t}else {\r\n\t\t\tprintError();\r\n\t\t}\r\n\t\te.preventDefault();\r\n\t}\r\n});\r\n\r\ndocument.querySelector('#localWeather').addEventListener('click', e=>{\r\n\te.preventDefault();\r\n\tnavigator.geolocation.getCurrentPosition(position => {\r\n\t\tgetWeather((`${position.coords.latitude  },${  position.coords.longitude}`))\r\n\t});\r\n})\r\n\r\ndocument.querySelector('#history').addEventListener('click', e => {\r\n\te.preventDefault();\r\n\tprintHistory(history);\r\n\t\r\n})\n\n//# sourceURL=webpack://tms/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
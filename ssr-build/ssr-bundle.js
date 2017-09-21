module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "EbM4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("uF5K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("EbM4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'article',
	{ id: 'form' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'h2',
		null,
		'Form'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'h3',
		null,
		'Simple horizontal form'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'solid white padding-1' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'spaced-2 flex row' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				'enter some input here'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { name: 'tex', type: 'text', 'class': 'grow', placeholder: 'input here' }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'select',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take one...'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take two...'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take three...'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'button',
				{ 'class': 'important solid' },
				'submit'
			)
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'h3',
		null,
		'Vertical form'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'solid white padding-1' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'spaced-vertical-1 flex col' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				'Forms should follow the text flow.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				{ 'for': 'tex' },
				'Enter some input here'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'tex', type: 'text', 'class': 'grow', placeholder: 'input here' }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'select',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take one...'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take two...'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'option',
					null,
					'Take three...'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('hr', null)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { name: 'pick', type: 'radio' }),
				' option one'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { name: 'pick', type: 'radio' }),
				' option two'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { name: 'pick', type: 'radio' }),
				' option three'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('hr', null),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				'Describe your life here'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('textarea', { 'class': 'height-5x noresize', placeholder: 'the story of my life' }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'label',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { type: 'checkbox' }),
				' I\'m okay with you sharing this...'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'button',
				{ 'class': 'solid important' },
				'submit'
			)
		)
	)
);

var Form = function Form() {
	return _ref;
};

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	null,
	'Buttons'
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'section',
	{ 'class': 'spaced-2 padding-1 solid white' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'button',
		null,
		'button default'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'a',
		{ 'class': 'button' },
		'link styled button'
	)
);

var Buttons = function Buttons() {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'article',
		{ id: 'buttons' },
		_ref2,
		_ref3,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'spaced-2 solid white padding-1' },
			["important", "info", "success", "warning", "danger", "dark", "light", "default"].map(function (color) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'button',
					{ 'class': ["solid", color, "margin-vertical-1"].join(" ") },
					color.charAt(0).toUpperCase() + color.substr(1)
				);
			})
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'spaced-2 solid white padding-1' },
			["important", "info", "success", "warning", "danger", "dark", "light", "default"].map(function (color) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'a',
					{ 'class': ["solid", color, "button", "margin-vertical-1"].join(" ") },
					color.charAt(0).toUpperCase() + color.substr(1)
				);
			})
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'spaced-2 solid white padding-1' },
			["small", "", "large", "xlarge"].map(function (size) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'a',
					{ 'class': "solid important button " + size },
					size || "default"
				);
			})
		)
	);
};

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	null,
	'Basic type (reset)'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h4',
	null,
	'Headers'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ 'class': 'padding-2 border-light' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		{ 'class': 'type-grid' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h1',
			null,
			'h1 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h2',
			null,
			'h2 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h3',
			null,
			'h3 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'h4 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h5',
			null,
			'h5 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h6',
			null,
			'h6 Fake News Proven Correct!'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Text should have an appropriate distance from it\'s header, without much fussing about.'
		)
	)
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h4',
	null,
	'Sizes'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ 'class': 'border-light padding-2' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'p',
		{ 'class': 'small' },
		'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'p',
		{ 'class': '' },
		'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'p',
		{ 'class': 'large' },
		'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'p',
		{ 'class': 'xlarge' },
		'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
	)
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h4',
	null,
	'Common markup'
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h3',
	null,
	'Typography: the art and technique of arranging type'
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'ol',
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'li',
		null,
		'Legible'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'li',
		null,
		'readable'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'li',
		null,
		'appealing'
	)
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'em',
	null,
	'when displayed.'
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'quote',
	null,
	'The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'code',
	null,
	'arranging type'
);

var Type = function Type() {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'article',
		{ id: 'type' },
		_ref4,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'solid white padding-2 spaced-vertical-2 max-width-20 type' },
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'border-light padding-2' },
				_ref10,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'p',
					{ 'class': 'max-width-20' },
					'Typography is the art and technique of arranging type to make written language:',
					_ref11,
					_ref12,
					_ref13,
					'Typography is the art and technique of ',
					_ref14,
					' to make written language legible, readable, and appealing when displayed.',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'pre',
						null,
						'function count(times) {\n\tfor (let i = 0; i < times; i++) {\n\t\tconsole.log("the count is: ", i);\n\t}\n}'
					),
					'The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.'
				)
			)
		)
	);
};

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'article',
	{ id: 'flex' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'h2',
		null,
		'Flex layouts'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'p',
		null,
		'Solving common use-cases with flex'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'solid white padding-1' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Putting things side-by-side with ',
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'code',
				null,
				'flex'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'The first.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid white' },
				'Column two.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'You know? I\'m the last.'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Use ',
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'code',
				null,
				'grow'
			),
			' to add space'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'The first.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid white grow' },
				'Column two has ',
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'code',
					null,
					'.grow'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'You know? I\'m the last.'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Use ',
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'code',
				null,
				'flex between'
			),
			' to justify'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex between padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'The first.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid white' },
				'Column two.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'You know? I\'m the last.'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Use flex, around to space around'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex around padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'The first.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid white' },
				'Column two.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'You know? I\'m the last.'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Use flex, end to stack on the right'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex end padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'The first.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid white' },
				'Column two.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'You know? I\'m the last.'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h4',
			null,
			'Use column and between to space vertically'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'vh-30 flex col between padding-1 solid light' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid dark' },
				'I am at the top'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				'someting in the center'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'padding-1 solid important' },
				'I am at the bottom'
			)
		)
	)
);

var Flex = function Flex() {
	return _ref15;
};

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	null,
	'Advanced layouts'
);

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'p',
	null,
	'Setting height and scrolling'
);

var _ref18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ 'class': 'box-5 min-width-5 padding-1 solid dark' },
	'.box-5 and .min-width-5 to avoid flex-scaling'
);

var _ref19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'span',
	null,
	'Just some content to force scrolling and wrapping... '
);

var _ref20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ 'class': 'flex center middle absolute cover fade solid black' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'solid white padding-2 box-7 flex col between shadow-3' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'p',
			null,
			'Use absolute and relative to create a dialog style popup'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex evenly' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'button',
				{ 'class': 'solid success' },
				'Confirm'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'button',
				{ 'class': 'solid info' },
				'Dismiss'
			)
		)
	)
);

var _ref21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'span',
	null,
	'Just some content to force scrolling and wrapping... '
);

var Sizing = function Sizing() {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'article',
		{ id: 'sizing' },
		_ref16,
		_ref17,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'solid white padding-1' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'flex padding-vertical-2 spaced-2' },
				_ref18,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'padding-1 solid light height-5 scroll' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'p',
						null,
						new Array(20).fill(1).map(function (i) {
							return _ref19;
						})
					)
				)
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'solid white padding-1 noscroll' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'relative' },
				_ref20,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'section',
					{ 'class': 'vh-40 scroll' },
					new Array(100).fill(1).map(function (i) {
						return _ref21;
					})
				)
			)
		)
	);
};

var _ref22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	null,
	'Shadows'
);

var Shadows = function Shadows() {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'article',
		{ id: 'shadows' },
		_ref22,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap' },
			[1, 2, 3, 4, 5].map(function (i) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': "shadow-" + i + " box-4 min-width-5 solid important" },
					'.shadow-',
					i
				);
			})
		),
		["right", "left", "bottom"].map(function (keyword) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'section',
				{ 'class': 'padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap' },
				[1, 2, 3, 4, 5].map(function (i) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ 'class': "shadow-" + keyword + "-" + i + " box-4 min-width-5 solid important" },
						'.shadow-',
						keyword,
						'-',
						i
					);
				})
			);
		})
	);
};

var _ref23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	null,
	'Colors'
);

var Colors = function Colors() {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'article',
		{ id: 'colors' },
		_ref23,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap' },
			["dark", "light", "success", "danger", "warning", "important", "info", "default"].map(function (color) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': "solid box-4 min-width-4 solid padding-1 " + color },
					color
				);
			})
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap' },
			["darken", "", "lighten"].map(function (color) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': "solid box-4 min-width-4 solid padding-1 info " + color },
					color || "default"
				);
			})
		)
	);
};

var _ref24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'article',
	{ id: 'tables' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'h2',
		null,
		'Tables'
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'padding-2 type solid white' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'table',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Player'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Hightscore'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'player 1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'1000020'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'mvhenten'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'39283'
				)
			)
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'padding-2 type solid white' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'table',
			{ 'class': 'stripes border default' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Player'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Hightscore'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'player 1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'1000020'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'mvhenten'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'39283'
				)
			)
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'padding-2 type solid white' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'table',
			{ 'class': 'spread lighten info stripes' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Player'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Hightscore'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'player 1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'1000020'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'mvhenten'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'39283'
				)
			)
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'section',
		{ 'class': 'padding-2 type solid white' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'table',
			{ 'class': 'spread lighten info stripes border' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Player'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'th',
					null,
					'Hightscore'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'player 1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'1000020'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'mvhenten'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'39283'
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'tr',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'T-Rex'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'td',
					null,
					'5645'
				)
			)
		)
	)
);

var Tables = function Tables() {
	return _ref24;
};

var _ref26 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ 'class': 'scroll width-10 vh-100 grow scroll padding-horizontal-2 padding-bottom-6 solid light' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Type, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Buttons, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Form, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Flex, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Sizing, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Shadows, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Colors, null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Tables, null)
);

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.componentDidMount = function componentDidMount() {
		var frag = document.location.hash;

		if (!frag) return;

		var el = document.querySelector(frag);
		if (el) el.scrollIntoView();
	};

	App.prototype.render = function render() {
		var menu = [{
			title: "Typography",
			href: "#type"
		}, {
			title: "Buttons",
			href: "#buttons"
		}, {
			title: "Forms",
			href: "#form"
		}, {
			title: "Flex controls",
			href: "#flex"
		}, {
			title: "Sizing",
			href: "#sizing"
		}, {
			title: "Shadows",
			href: "#shadows"
		}, {
			title: "Font Awesome",
			href: "#icons"
		}, {
			title: "Colors",
			href: "#colors"
		}, {
			title: "Borders, padding, margins",
			href: "#borders"
		}, {
			title: "Tables",
			href: "#tables"
		}];
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'flex row min-width-20' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'solid dark vh-100 scroll', style: { "flex-basis": "200px" } },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ 'class': 'list-none list-flat padding-vertical-3' },
					menu.map(function (_ref25) {
						var title = _ref25.title,
						    href = _ref25.href;
						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'li',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'a',
								{ href: href, 'class': 'button solid dark hover-important block' },
								title
							)
						);
					})
				)
			),
			_ref26
		);
	};

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "uF5K":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map
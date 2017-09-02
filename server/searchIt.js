'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nightmare = require('nightmare');

var _nightmare2 = _interopRequireDefault(_nightmare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nightmare = (0, _nightmare2.default)({ show: false });

//simple google look up
//Author Jonathan R. Lopez
var searchIt = {
	//google look up
	gLookUpTitles: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(searchContext, next) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return nightmare.goto("http://google.com").title().type('#lst-ib', searchContext).click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)').evaluate(function () {
								var innerTextArray = [];
								var innerText = document.querySelectorAll('#rso > div > div > div > div > div > h3 > a');
								for (var i = 0; i < innerText.length; i++) {
									innerTextArray.push(innerText[i].text);
								};

								return innerTextArray;
							}).then(next);

						case 3:
							_context.next = 8;
							break;

						case 5:
							_context.prev = 5;
							_context.t0 = _context['catch'](0);

							console.log("there was and error : -> " + _context.t0);

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 5]]);
		}));

		return function gLookUpTitles(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}(),
	gLookUpAnchors: function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(searchContext, next) {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return nightmare.goto("http://google.com").title().type('#lst-ib', searchContext).click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)').evaluate(function () {
								var innerTextArray = [];
								var innerText = document.querySelectorAll('#rso > div > div > div > div > div > div > div > div > cite');
								for (var i = 0; i < innerText.length; i++) {
									innerTextArray.push(innerText[i].textContent);
								};

								return innerTextArray;
							}).then(next);

						case 3:
							_context2.next = 8;
							break;

						case 5:
							_context2.prev = 5;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);

						case 8:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[0, 5]]);
		}));

		return function gLookUpAnchors(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	}(),
	bLookUpTitles: function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(searchContext, next) {
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return nightmare.goto('http://bing.com').title().type('#sb_form_q', searchContext).click('#sb_form_go').evaluate(function () {
								var titles = document.querySelectorAll('#b_results > li > h2 > a');
								var titleArr = [];

								for (var i = 0; i < titles.length; i++) {
									titleArr.push(titles[i].text);
								};

								return titleArr;
							}).then(next);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function bLookUpTitles(_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	}(),
	bLookUpAnchors: function () {
		var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(searchContext, next) {
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return nightmare.goto('http://bing.com').title().type('#sb_form_q', searchContext).click('#sb_form_go').evaluate(function () {
								var anchors = document.querySelectorAll('#b_results > li > div > div > cite');
								var anchorsArr = [];

								for (var i = 0; i < anchors.length; i++) {
									anchorsArr.push(anchors[i].textContent);
								};

								return anchorsArr;
							}).then(next);

						case 2:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined);
		}));

		return function bLookUpAnchors(_x7, _x8) {
			return _ref4.apply(this, arguments);
		};
	}(),
	end: function () {
		var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return nightmare.goto("http://duckduckgo.com").evaluate(function () {}).end();

						case 3:
							_context5.next = 8;
							break;

						case 5:
							_context5.prev = 5;
							_context5.t0 = _context5['catch'](0);

							console.log(_context5.t0);

						case 8:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[0, 5]]);
		}));

		return function end() {
			return _ref5.apply(this, arguments);
		};
	}()
};

module.exports = searchIt;
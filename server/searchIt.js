'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nightmare = require('nightmare');

var _nightmare2 = _interopRequireDefault(_nightmare);

var _diskdb = require('diskdb');

var _diskdb2 = _interopRequireDefault(_diskdb);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nightmare = (0, _nightmare2.default)({ show: false });

//simple google look up
//Author Jonathan R. Lopez
var searchIt = {
	gLookUp: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(searchContext) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:

							console.log("running gLookUp...");
							_context.prev = 1;
							_context.next = 4;
							return nightmare.goto("http://google.com").title().type('#lst-ib', searchContext).click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)').evaluate(function () {
								var innerTextArray = [];
								var innerText = document.querySelectorAll('div > div > div > div > div > h3 > a');
								for (var i = 0; i < innerText.length; i++) {
									innerTextArray.push(innerText[i].text);
								};

								return innerTextArray;
							}).end().then(function (result) {
								//we deliver content here
								console.log(result);

								//					we have to enter database here
								//					we return in in console.log
							});

						case 4:
							_context.next = 9;
							break;

						case 6:
							_context.prev = 6;
							_context.t0 = _context['catch'](1);

							console.log("there was and error : -> " + _context.t0);

						case 9:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 6]]);
		}));

		return function gLookUp(_x) {
			return _ref.apply(this, arguments);
		};
	}()
};

module.exports = searchIt;
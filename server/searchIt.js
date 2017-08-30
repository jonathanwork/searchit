'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchIt = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nightmare = require('nightmare');

var _nightmare2 = _interopRequireDefault(_nightmare);

var _diskdb = require('diskdb');

var _diskdb2 = _interopRequireDefault(_diskdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Author Jonathan R. Lopez
var nightmare = (0, _nightmare2.default)({ show: true });
var searchIt = {};

//simple google look up
searchIt.gLookUp = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(gUrl, topic) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return nightmare.goto(gUrl).title().type('#lst-ib', topic).click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)').evaluate(function () {
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

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

exports.searchIt = searchIt;
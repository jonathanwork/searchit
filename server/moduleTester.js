'use strict';

var _searchIt = require('./searchIt');

var _searchIt2 = _interopRequireDefault(_searchIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_searchIt2.default.bLookUpAnchors('works', function (result) {
	console.log(result);
	_searchIt2.default.end();
});
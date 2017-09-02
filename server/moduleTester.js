'use strict';

var _searchIt = require('./searchIt');

var _searchIt2 = _interopRequireDefault(_searchIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_searchIt2.default.gLookUpTitles('awesome links', function (result) {
	//return results anyway you want
	console.log('awesome links -> ' + result);
	_searchIt2.default.end(); //we it to finish executing
});
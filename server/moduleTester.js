'use strict';

var _searchit = require('./searchit');

var _searchit2 = _interopRequireDefault(_searchit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_searchit2.default.gLookUpTitles('awesome links', function (result) {
	//return results anyway you want
	console.log('awesome links -> ' + result);
	_searchit2.default.end(); //we it to finish executing
});
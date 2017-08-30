import searchIt from './searchIt';

searchIt.bLookUpAnchors('works', (result)=> {
	console.log(result);
	searchIt.end();
	})
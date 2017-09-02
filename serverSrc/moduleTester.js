import searchIt from './searchit'; 

searchIt.gLookUpTitles('awesome links', (result)=> {
	//return results anyway you want
	console.log('awesome links -> ' + result);
	searchIt.end(); //we it to finish executing
	});
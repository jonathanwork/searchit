//Author Jonathan R. Lopez
import Nightmare from 'nightmare';
import diskdb from 'diskdb';
import redis from 'redis'

let nightmare = Nightmare({show: false});



//simple google look up
let searchIt = {
	gLookUp: async (searchContext) => {
			
			console.log("running gLookUp...");
			try {
				await nightmare
					.goto("http://google.com")
					.title()
					.type('#lst-ib', searchContext)
					.click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
					.evaluate(()=> {
						var innerTextArray = [];
						var innerText = document.querySelectorAll('div > div > div > div > div > h3 > a');
						for( var i = 0;i < innerText.length;i++ ) {
							innerTextArray.push(innerText[i].text);
							}; 
							
						return innerTextArray;
						})
					.end()
					.then((result=> {
						//we deliver content here
						console.log(result);
						return result;
//					we have to enter database here
//					we return in in console.log
						}))
				} //end of try
				catch(err){
					console.log("there was and error : -> " + err);
				}
	}
};

module.exports = searchIt;
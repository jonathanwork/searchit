//Author Jonathan R. Lopez
import Nightmare from 'nightmare';

let nightmare = Nightmare({show: false});



//simple google look up
let searchIt = {
	//google look up
	gLookUpTitles: async (searchContext, next) => {
		try {
			await nightmare
				.goto("http://google.com")
				.title()
				.type('#lst-ib', searchContext)
				.click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
				.evaluate(()=> {
					var innerTextArray = [];
					var innerText = document.querySelectorAll('#rso > div > div > div > div > div > h3 > a');
					for( var i = 0;i < innerText.length;i++ ) {
						innerTextArray.push(innerText[i].text);
						}; 
						
					return innerTextArray;
					})
				.then(next);
			} //end of try
			catch(err){
				console.log("there was and error : -> " + err);
			}
		},
	gLookUpAnchors: async (searchContext, next) => {
		try {
			await nightmare
				.goto("http://google.com")
				.title()
				.type('#lst-ib', searchContext)
				.click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
				.evaluate(()=> {
					var innerTextArray = [];
					var innerText = document.querySelectorAll('#rso > div > div > div > div > div > div > div > div > cite');
					for( var i = 0;i < innerText.length;i++ ) {
						innerTextArray.push(innerText[i].textContent);
						}; 
						
					return innerTextArray;
					})
				.then(next);
				
			}catch(err) {
				console.log(err);
				}
		},
	bLookUpTitles: async (searchContext, next) => {
		
		await nightmare
				.goto('http://bing.com')
				.title()
				.type('#sb_form_q', searchContext)
				.click('#sb_form_go')
				.evaluate(() => {
					const titles=document.querySelectorAll('#b_results > li > h2 > a');
					let titleArr = [];
					
					for(let i = 0; i < titles.length; i++){
						titleArr.push(titles[i].text)
						};
						
					return titleArr
					})
				.then(next)
		},
	bLookUpAnchors: async (searchContext, next) => {
		
		await nightmare
				.goto('http://bing.com')
				.title()
				.type('#sb_form_q', searchContext)
				.click('#sb_form_go')
				.evaluate(() => {
					const anchors=document.querySelectorAll('#b_results > li > div > div > cite');
					let anchorsArr = [];
					
					for(let i = 0; i < anchors.length; i++){
						anchorsArr.push(anchors[i].textContent)
						};
						
					return anchorsArr;
					})
				.then(next)
		},
	end: async () => {
		try {
			await nightmare
				.goto("http://duckduckgo.com")
				.evaluate(()=> {
					})
				.end();
			}catch(err) {
				console.log(err);
				}
		}
};

module.exports = searchIt;
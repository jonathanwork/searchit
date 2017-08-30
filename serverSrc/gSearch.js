import Nightmare from 'nightmare';

let nightmare = Nightmare({show: true});

//simple google look up
const gLookUp = async (gUrl, topic) => {
		try {
			await nightmare
				.goto(gUrl)
				.title()
				.type('#lst-ib', topic)
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
//					we have to enter database here
//					we return in in console.log
					}))

			}
			catch(err){
				console.log("there was and error : -> " + err);
			}
	};


export {gLookUp}
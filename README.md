# SearchIt search, search engines
## Maintainer Jonathan R. Lopez (jonathanwork856@hotmail.com)

this api is simple type what you want get data from search engines so far supports

  - google
  - bing
  - duckduckgo(coming soon)


how to use basics
```
    var searchIt = require('searchIt');
    
    searchIt.gLookUpTitles('awesome links', (result)=> {
        //return results anyway you want
        console.log('awesome links -> ' + result);
        searchIt.end(); //we it to finish executing
        });
```



const request = require("request");
const cheerio = require("cheerio");


request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html) {
    if (error) {
        console.error('error:', error);
    }
    else {
        handleHtml(html);
    }
}
function handleHtml(html) {
    let selTool = cheerio.load(html);
    let counterArray = selTool(".maincounter-number");
    for (let i = 0; i < counterArray.length; i++){
        let data = selTool(counterArray[i]).text();
        console.log("data",data);
    }

    
}
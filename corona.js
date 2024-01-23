const request = require("request");
const cheerio = require("cheerio");
//const chalk = require("chalk");



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
  ///  for (let i = 0; i < counterArray.length; i++){
     //   let data = selTool(counterArray[i]).text();
       // console.log("data",data);
   // }

    let total = selTool(counterArray[0]).text();
    let deaths = selTool(counterArray[1]).text();
    let recovered = selTool(counterArray[2]).text();
    console.log("Total cases", total);
    console.log("Total deaths", deaths);
    console.log("Recovered", recovered);
    

}
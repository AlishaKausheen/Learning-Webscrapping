

const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-chennai-super-kings-final-1370353/full-scorecard";
request(url, cb);
 
function cb(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        printScore(html);
    }
}

function printScore(html) {
    let $ = cheerio.load(html);
    

    
}
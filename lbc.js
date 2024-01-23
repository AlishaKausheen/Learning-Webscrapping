// to find last ball commentry from espcric info an unknown site

const request = require("request");
const cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-chennai-super-kings-final-1370353/ball-by-ball-commentary"
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
 let $=   cheerio.load(html);
    let elemArray = $(".ci-html-content");
    let text = $(elemArray[0]).text();
    let htmlData = $(elemArray[0]).html();
    console.log("text data", text);
    console.log("html data", htmlData);

}
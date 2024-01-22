const request = require("request");
request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html) {
    if (error) {
        console.error('error:', error);
    }
    else {
        console.log('html', html);
    }
}

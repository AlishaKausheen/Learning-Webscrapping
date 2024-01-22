const request = require("request");
request('http://www.google.com', cb);
function cb(error, response, html) {
    console.error('error:', error);
    console.log('html', html);
}

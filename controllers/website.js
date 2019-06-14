const website = {};

module.exports = website;

website.home = (payload, callback) => {

    // (http_code, error, payload, response_type
    callback(200, false, '<h1>Home page</h1>', 'html');
}

website.test = (payload, callback) => {

    // (http_code, error, payload, response_type
    callback(200, false, '<h1>some other page</h1>', 'html');
}
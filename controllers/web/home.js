const home = {};

module.exports = home;

home.index = (payload, callback) => {

    // (http_code, error, payload, response_type
    callback(200, false, '<h1>Home page</h1>', 'html');
}

home.test = (payload, callback) => {

    // (http_code, error, payload, response_type
    callback(200, false, '<h1>some other page</h1>', 'html');
}

home.not_found = (payload, callback) => {

    // (http_code, error, payload, response_type
    callback(404, true, '<h1>Page not found</h1>', 'html');
}
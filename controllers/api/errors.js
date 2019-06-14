/**
 * Container for different app errors
 */
let errors = {};

// Export the controller at file start to avoid circular dependencies
module.exports = errors;

errors.not_found = (payload, callback) => {
    callback(
        404, 
        'Requested route was not found in this server',
    );
}

errors.not_found_web = (payload, callback) => {
    callback(
        404, 
        'Requested route was not found in this server',
        '<h1>Requested route was not found in this server </h1>',
        'html'
    );
}

 
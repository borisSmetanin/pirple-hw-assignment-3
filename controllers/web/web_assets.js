const web_assets = {};

module.exports = web_assets;

web_assets.fetch_asset = (payload, callback) => {
    callback(200, false, 'web asset', 'html');
}
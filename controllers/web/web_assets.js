const web_assets = {};
module.exports = web_assets;

const file_model =require('../../lib/file_model');

web_assets.fetch_asset = (payload, callback) => {

    let allowed_assets = [ 'css', 'js', 'img' ];

    if (allowed_assets.includes(payload.asset_type)) {

        file_model.read_public_file('assets', payload.asset_file_path, (err, asset) => {

            if ( ! err && asset) {
                
                callback(200, false, asset, payload.asset_type );
            } else {
                callback(500, true, { err: 'Internal error'});
            }
        });
    } else {
        callback(412, true, { err: 'Invalid asset type'});
    }
}
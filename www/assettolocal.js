var exec = require("cordova/exec");

var AssetToLocal = function () {};

/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
AssetToLocal.prototype.copy = function(url) {
    exec(null, null, "AssetToLocal", "copy", [url]);
};

var assettolocal = new AssetToLocal();
module.exports = assettolocal;

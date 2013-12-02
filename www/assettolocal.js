var exec = require("cordova/exec");

var AssetToLocal = function () {};

/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
AssetToLocal.prototype.play = function(url) {
    exec(null, null, "AssetToLocal", "copy", [url]);
};

var assetToLocal = new AssetToLocal();
module.exports = assetToLocal;
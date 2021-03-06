/**
 * Handles loading JSON assets in a browser environment.
 *
 * @package common
 * @type loader
 */
javelin.loader(['.json'], ['browser'], function(loader, relPath, absPath, done) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", absPath, true);
    xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        loader.register(relPath, json);
        done(json);
    };
    xhr.send();
});

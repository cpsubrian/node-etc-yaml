var path = require('path'),
    etc = require('etc'),
    yml = require('../');

// Attach plugin.
var conf = etc().use(yml);

// Load a file.
conf.file(path.join(__dirname, 'config.yaml'));

// Print the config.
console.log(conf.toJSON());

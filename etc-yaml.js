var yaml = require('js-yaml')
  , fs = require('fs');

exports.attach = function() {
  var etc = this;

  etc.parseYAML = function(filePath) {
    return yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
  };

  etc.parsers.yaml = etc.parseYAML;
  etc.parsers.yml = etc.parseYAML;
};

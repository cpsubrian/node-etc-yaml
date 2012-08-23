require('js-yaml');

exports.attach = function() {
  var etc = this;

  etc.parseYAML = function(filePath) {
    return require(filePath);
  };

  etc.parsers.yaml = etc.parseYAML;
  etc.parsers.yml = etc.parseYAML;
};

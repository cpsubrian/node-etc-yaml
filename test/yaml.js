var etc = require('etc'),
    etcYAML = require('../'),
    assert = require('assert'),
    path = require('path');

describe('YAML etc plugin', function() {
  var conf;

  before(function() {
    conf = etc().use(etcYAML);
  });

  it('can parse YAML files', function() {
    conf.file(path.join(__dirname, 'config.yaml'));
    assert.equal(conf.get('host'), 'localhost');
    assert.equal(conf.get('person:name'), 'Brian');
    assert.strictEqual(conf.get('optimize'), false);
    assert.strictEqual(conf.get('turbo'), true);
  });

});

describe('finding songs in different html pages', function() {
  var assert = require('assert');
  var fs = require('fs');
  var path = require('path');
  var findSongs = require('../index.js');

  var tests = fs.readdirSync(path.join(__dirname, 'fixtures'));
  tests.forEach(function(type) {
    describe(type, function() {
      var html, songs;

      before(function() {
        html = fs.readFileSync(path.join(__dirname, 'fixtures', type, 'page.html'));
        songs = require('./fixtures/' + type + '/results.json');
      });

      it('find songs', function() {
        if (process.env.DEBUG !== undefined) {
          console.log(JSON.stringify(findSongs(html, type)));
        }
        assert.deepEqual(findSongs(html, type), songs);
      });
    });
  });
});
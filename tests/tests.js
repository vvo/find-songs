describe('finding songs in different html pages', function() {
  var assert = require('assert');
  var fs = require('fs');
  var path = require('path');
  var findSongs = require('../index.js');

  var tests = fs.readdirSync(path.join(__dirname, 'fixtures'));
  tests.forEach(function(type) {
    describe(type, function() {
      var html, songs, params;

      before(function() {
        html = fs.readFileSync(path.join(__dirname, 'fixtures', type, 'page.html'));
        songs = require('./fixtures/' + type + '/results.json');
        params = require('./fixtures/' + type + '/params.js');
      });

      it('find songs', function() {
        var foundSongs = findSongs(html, params.startDate, type);

        if (process.env.DEBUG !== undefined) {
          console.log(JSON.stringify(foundSongs));
        }

        assert.deepEqual(foundSongs, songs);
      });
    });
  });
});
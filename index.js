module.exports = findSongs;

function findSongs(html, type) {
  var cheerio = require('cheerio');
  var $ = cheerio.load(html);

  return require('./lib/' + type)($);
}


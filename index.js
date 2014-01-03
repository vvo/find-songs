module.exports = findSongs;

function findSongs(html, startDate, type) {
  var cheerio = require('cheerio');
  var $ = cheerio.load(html);

  return require('./lib/' + type)($, startDate);
}


module.exports = lemouv;

function lemouv($, startDate) {
  var songs = [];

  var day = new Date(startDate);
  day.setHours(0);
  day.setMinutes(0);

  $('#content-area .views-row').each(function() {
    // '23H55' => ['23', '55']
    var when = this.find('.time').text().split('H');

    // when asking for songs at 23:15 GMT+1 sat 25 june,
    // if song hours are 00:xx, then
    // song day is sun 26 june
    // we use getUTCHours() so that we are never system dependant
    if (when[0] === '00' && startDate.getUTCHours() === 22) {
      when[0] = '24';
    }

    songs.push({
      artist: this.find('.name').text(),
      title: this.find('.title').text(),
      airDate: new Date(day.getTime() +
        when[0] * 60 * 60 * 1000 +
        when[1] * 60 * 1000).getTime()
    });
  });

  return songs;
}


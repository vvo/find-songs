module.exports = skyrock;

function skyrock($, startDate) {
  var songs = [];

  var day = new Date(startDate);
  day.setHours(0);
  day.setMinutes(0);

  $('.b-list--sounds > li').each(function() {
    // '23H55' => ['23', '55']
    var when = this.find('.b-list__item__number__infos').text().split(':');

    if (when[0] === '00' && startDate.getUTCHours() === 22) {
      when[0] = '24';
    }

    songs.push({
      artist: this.find('.b-list__item__text .heading-3').text(),
      title: this.find('.b-list__item__text .teaser-1').text().replace('\\n', '').trim(),
      airDate: new Date(day.getTime() +
        when[0] * 60 * 60 * 1000 +
        when[1] * 60 * 1000).getTime()
    });
  });

  return songs;
}


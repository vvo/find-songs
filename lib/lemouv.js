module.exports = lemouv;

function lemouv($) {
  var songs = [];

  var day = Date.parse(
    $('[name=start_date] [selected=selected]')
      .eq(0)
      .text()
  );

  $('#content-area .views-row').each(function() {
    var when = this.find('.time').text().split('H');

    songs.push({
      artist: this.find('.name').text(),
      title: this.find('.title').text(),
      airDate: new Date(day +
        when[0] * 60 * 60 * 1000 +
        when[1] * 60 * 1000).getTime()
    });
  });

  return songs;
}


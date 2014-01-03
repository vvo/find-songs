module.exports = nova;

function nova($) {
  var songs = [];

  $('.cestquoicetitre_results > div').each(function() {
    songs.push({
      artist: this.find('.artiste').text().replace('\\n', '').trim(),
      title: this.find('.titre').text().replace('\\n', '').trim(),
      // class="timestamp_1388704176 result-odd resultat clearfix" => 1388704176
      airDate: new Date(this.attr('class').split(' ')[0].split('_')[1] * 1000).getTime()
    });
  });

  return songs;
}


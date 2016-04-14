$(document).ready(function() {
  var audio = document.querySelector('.sounds-show audio');

  if (audio) {
    audio.onseeking = function() {
      var currentTimeElement = document.querySelector('.sounds-show .current-time')
      currentTimeElement.innerHTML = Math.floor(audio.currentTime*1000);
    };
  }
});

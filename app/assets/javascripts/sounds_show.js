$(document).ready(function() {
  var audio = document.querySelector('.sounds-show audio');

  if (audio) {
    audio.onseeking = function() {
      currentTime = audio.currentTime;
      var currentTimeElement = document.querySelector('.sounds-show .current-time')
      currentTimeElement.innerHTML = Math.floor(currentTime*1000);
    };
  }
});

$(document).ready(function() {
  var audio = document.querySelector('.sounds-show audio');

  if (audio) { main(); }

  function main() {
    // Update audio currentTime display for user.
    audio.ontimeupdate = function() {
      var currentTimeElement = document.querySelector('.sounds-show .current-time')
      currentTimeElement.innerHTML = Math.floor(audio.currentTime*1000);
    };

    // Play sections when Play button is clicked.
    $('.section-box button').on('click', function() {
        var startTime = $(this).parents('.section-box').data('start-time')/1000;
        var endTime = $(this).parents('.section-box').data('end-time')/1000;
        // var src = document.querySelector('.sound audio').src;
        // console.log(src);

        audio.currentTime = startTime;
        audio.play()
        checkIfSectionEnded();

        function checkIfSectionEnded() {
          if (audio.currentTime <= endTime) {
            requestAnimationFrame(checkIfSectionEnded);
          } else {
            audio.pause();
          }
        }
    });
  }
});

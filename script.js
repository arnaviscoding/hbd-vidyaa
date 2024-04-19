document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.querySelector(".play");
  var audioPlayer = document.getElementById("audioPlayer");
  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  });
});

let playing = false;
const player = document.getElementById("player");
const banner = document.querySelector(".music-banner");

function toggleMusic() {
  if (!playing) {
    player.play();
    playing = true;
    banner.innerHTML = "⏸ now playing: Sienna - The Marías";
  } else {
    player.pause();
    playing = false;
    banner.innerHTML = " now playing: Sienna - The Marías";
  }
}

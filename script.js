const playButton = document.getElementById('playButton');
const playMen = document.getElementById('playMen');
const pixelsToScroll = 1;

const audio = new Audio("/cool.mp3");


const thumbnails = [
    "All I Want.jpg",
    "Bangarang.jpg",
    "Brave.jpg",
    "Buzzards.jpg",
    "Cluster.jpg",
    "Crisis Vision.jpg",
    "Nirvana_album_cover.jpg",
    "Killer Bee.jpg",
    "Lifeline.webp",
    "Party Girls.jpg",
    "Round Table Reinforcements 1.jpg",
    "Show Me.webp",
    "Skin.jpg",
    "Virtual Self.webp",
    "imagine_dragons_origins.webp",
    "Marshmello.png",
    "tellmewhy.jpg",
    "elect.jpg",
    "Tame_Impala.png",
    "johnny.jpg",
    "Radiohead.png",
    "jazz.webp",
    "weezer.jpg",
    "Void.webp"
]

document.querySelectorAll(".albumImage").forEach(element => {
    const index = Math.floor(Math.random() * thumbnails.length);
    element.src = "/Album Art/" + thumbnails[index];
});


let scrollInterval = null;

function slowScroll(element, pixelsToScroll) {
  const intervalDuration = 200; // the duration of each interval in milliseconds
  const totalScrollDistance = element.scrollWidth - element.clientWidth;
  let currentScrollPosition = element.scrollLeft;

  if (scrollInterval !== null) {
    clearInterval(scrollInterval);
    scrollInterval = null;
    playButton.src = "/icons/play.svg";
    audio.pause();
    return;
  }
  playButton.src = "/icons/pause.svg";
  audio.play();

  
  scrollInterval = setInterval(() => {
    const newScrollPosition = currentScrollPosition + pixelsToScroll;
    element.scrollLeft = newScrollPosition;
    currentScrollPosition = newScrollPosition;

    if (currentScrollPosition >= totalScrollDistance) {
      clearInterval(scrollInterval);
    }
  }, intervalDuration);
}

if (playButton) {
  playButton.addEventListener('click', function() {
    slowScroll(playMen, pixelsToScroll);
  });
}


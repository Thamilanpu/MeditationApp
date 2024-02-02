const play = document.querySelector(".playbtn");
const main = document.querySelector(".container");
const song = document.querySelector(".play-container");
const back = document.querySelector(".backbtn");

play.addEventListener("click", () => {
  song.classList.toggle("hide");
  main.classList.toggle("hide");
});

back.addEventListener("click", () => {
  song.classList.toggle("hide");
  main.classList.toggle("hide");
});

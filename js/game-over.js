function gameOver() {
  clearInterval(crono);
  document.querySelector("#gameOver").classList.add("visible");
}

function timeOver() {
  document.querySelector("#timeOver").classList.add("visible");
}

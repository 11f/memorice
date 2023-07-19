function finalizar() {
  clearInterval(crono);
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#levelUp").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}

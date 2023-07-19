function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-level").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#levelUp").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#crono").classList.add("crono-oculto");
  }
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
  modoRelax = false;
  document.querySelector("#welcome").classList.remove("visible");
  iniciar();
  document.querySelector(".control-level").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#welcome").classList.remove("visible");
  iniciar();
}

function levelUp() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#level").innerText = nivelTexto;
}

function cargaNuevoNivel() {
  levelUp();
  actualizaNivel();
  iniciar();
}

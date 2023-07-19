function escribeNiveles() {
  var menuNiveles = document.querySelector(".selecciona-level ul");
  niveles.forEach(function(elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='level' data-level=" +
      indice +
      ">level " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });
}

function cambiaNivel() {
  var level = parseInt(this.dataset.level);
  nivelActual = level;
  actualizaNivel();
  iniciar();
}

function muestraMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-level").classList.toggle("visible");
}

function ocultaMenuNiveles() {
  document.querySelector(".selecciona-level").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-level")) {
    return;
  }
  document.querySelector(".selecciona-level").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}

// showw levels dynamic
escribeNiveles();

// show init events
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#normal-game")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#relax-game")
  .addEventListener("click", iniciaJuegoRelax);

document
  .querySelector("#control-level")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".level").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

// show welcome screen
document.querySelector("#welcome").classList.add("visible");

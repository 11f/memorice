function iniciaCronometro() {
  var seconds = 30;
  var minutes = 0;
  var segundosTexto;
  var minutosTexto;

  function actualizaContador() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(crono);
      timeOver();
    }
    segundosTexto = seconds;
    minutosTexto = minutes;
    if (seconds < 10) {
      segundosTexto = "0" + seconds;
    }
    if (minutes < 10) {
      minutosTexto = "0" + minutes;
    }
    document.querySelector("#minutes").innerText = minutosTexto;
    document.querySelector("#seconds").innerText = segundosTexto;
  }
  crono = setInterval(actualizaContador, 1000);
}

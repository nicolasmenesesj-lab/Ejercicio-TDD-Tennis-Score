import Tennis from "./tennis";

let game = new Tennis();

const player1Button = document.querySelector("#punto-jugador1");
const player2Button = document.querySelector("#punto-jugador2");
const resetButton = document.querySelector("#reiniciar");
const div = document.querySelector("#marcador-div");

function mostrarMarcador() {
  div.innerHTML = "<p>" + game.getScore() + "</p>";
}

player1Button.addEventListener("click", () => {
  game.player1Scores();
  mostrarMarcador();
});

player2Button.addEventListener("click", () => {
  game.player2Scores();
  mostrarMarcador();
});

resetButton.addEventListener("click", () => {
  game = new Tennis();
  mostrarMarcador();
});

mostrarMarcador();
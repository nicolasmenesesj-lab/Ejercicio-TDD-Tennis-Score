import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia devolver 'Love - Love' cuando ambos jugadores tienen cero puntos", () => {
    const tennis = new Tennis();
    expect(tennis.getScore()).toEqual("Love - Love");
  });

  it("deberia devolver '15 - Love' cuando el jugador 1 anota un punto", () => {
    const tennis = new Tennis();
    tennis.player1Scores();
    expect(tennis.getScore()).toEqual("15 - Love");
  });

  it("deberia devolver 'Love - 15' cuando el jugador 2 anota un punto", () => {
    const tennis = new Tennis();
    tennis.player2Scores();
    expect(tennis.getScore()).toEqual("Love - 15");
  });
  it ("deberia devolver '30 - Love' cuando el jugador 1 anota dos puntos", () => {
    const tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.getScore()).toEqual("30 - Love");
  });
  it ("deberia devolver 'Love - 30' cuando el jugador 2 anota dos puntos", () => {
    const tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.getScore()).toEqual("Love - 30");
  });
});







//Casos De Prueba
//0. Starting point Love -Love
//1. Player 1 Scores:  15-0
//2. Player 2 Scores:  0-15
//3. Player 1 Scores Twice:  30-0
//4. Player 2 Scores Twice:  0-30
//5. Player 1 Scores Three Times:  40-0
//6. Player 2 Scores Three Times:  0-40
//7. Player 1 Scores Four Times: "Game for Player 1"
//8. Player 2 Scores Four Times: "Game for Player 2"
//9. Player 1 Scores Three Times and Player 2 Scores Three Times: "Deuce"
//10. Player 1 Scores Four Times and Player 2 Scores Three Times: "Advantage for Player 1"
//11. Player 2 Scores Four Times and Player 1 Scores Three Times: "Advantage for Player 2"
//12. When Players are in deuce and player 1 Scores 2 consecutive times: "Game for pLayer 1"
//13. When Players are in deuce and player 2 Scores 2 consecutive times: "Game for pLayer 2"
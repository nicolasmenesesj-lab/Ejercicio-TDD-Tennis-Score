class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }

    player1Scores() {
        this.player1Points += 1;
    }

    player2Scores() {
        this.player2Points += 1;
    }

    getScore() {
        const scoreNames = ["Love", "15", "30", "40"];
        if (this.player1Points >= 3 && this.player2Points >= 3) {
            if (this.player1Points === this.player2Points) {
                return "Deuce";
            } else if (this.player1Points === this.player2Points + 1) {
                return "Advantage for Player 1";
            } else if (this.player2Points === this.player1Points + 1) {
                return "Advantage for Player 2";
            }
        }
        if (this.player1Points >= 4 && this.player1Points >= this.player2Points + 2) {
            return "Game for Player 1";
        }
        if (this.player2Points >= 4 && this.player2Points >= this.player1Points + 2) {
            return "Game for Player 2";
        }
        return `${scoreNames[this.player1Points]} - ${scoreNames[this.player2Points]}`;
    }
}
export default Tennis;
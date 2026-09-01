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
        if (this.player1Points === 0 && this.player2Points === 0) {
            return "Love - Love";
        }
        if (this.player1Points === 1 && this.player2Points === 0) {
            return "15 - Love";
        }
        if (this.player1Points === 0 && this.player2Points === 1) {
            return "Love - 15";
        }
        if (this.player1Points === 2 && this.player2Points === 0) {
            return "30 - Love";
        }
    }
}
export default Tennis;
const moves = ['R', 'P', 'S', 'T', 'W']

class bot {
    constructor() {
        this.tntRemaining = 100
    }
    makeMove(gamestate) {
        const move = moves[Math.floor(Math.random() * 5)]
        if (move == 'T') {
            this.tntRemaining = Math.max(this.tntRemaining - 1, 0)
            if (this.tntRemaining == 0) {
                return moves[Math.floor(Math.random() * 3)]
            }
        }
        return move
    }
}

module.exports = bot;
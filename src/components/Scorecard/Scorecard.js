
class Scorecard {

    constructor(player) {
        this.player = player;
        this.frames = [];
    }

    addFrame(frame) {
        this.frames.push(frame);
        this.calculateScore();
    }

    calculateScore() {
        console.log('score');
    }
}

export default Scorecard;

class Scorecard {

    constructor(player) {
        this.player = player;
        this.frames = [];
    }

    addFrame(frame) {
        this.frames.push(frame);
    }

    calculateScore() {
        console.log('score');
    }
}
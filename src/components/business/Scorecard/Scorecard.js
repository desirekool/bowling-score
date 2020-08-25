import FrameInfo from "../FrameInfo/FrameInfo";

class Scorecard {

    constructor() {
        this.player = '';
        this.frames = [];
        [...Array(10)].map((x, i) =>
            this.frames.push(new FrameInfo())
        )
        this.currentFrame = 1;
    }

    setPlayer(player) {
        this.player = player;
    }

    addFrame(frame) {
        this.frames.push(frame);
        this.calculateScore();
    }

    updateFrame(index, frame) {
        this.frames[index] = frame;
        this.calculateScore();
    }

    updateCurentFrame(frame) {
        this.frames[this.currentFrame] = frame;
        this.calculateScore();
    }

    setCurrentFrame(currentFrame) {
        this.currentFrame = currentFrame;
    }

    calculateScore() {
        console.log('score');
    }
}

export default Scorecard;
import FrameInfo, {ALL_PINS_STANDING, FRAME_IN_PROGRESS} from "../FrameInfo/FrameInfo";

class Scorecard {

    constructor() {
        this.player = '';
        this.frames = [];
        [...Array(10)].map((x, i) =>
            this.frames.push(new FrameInfo())
        );
        this.currentFrame = 1;
    }

    throwBall(pinsKnockedDown, UpdateGameStatus) {
        let currentFrame = this.getCurrentFrame();
        if(this.isLastFrame()) {
            currentFrame.updateLastFrameThrows(pinsKnockedDown, UpdateGameStatus);
        } else if (this.frameIsAStrike(currentFrame, pinsKnockedDown)) {
            currentFrame.setFrameAsStrike();
            this.currentFrame++;

        } else if(this.frameIsInProgress(currentFrame, pinsKnockedDown)) {
            currentFrame.setFrameAsInProgress(pinsKnockedDown);
        } else if(this.frameIsASpare(currentFrame, pinsKnockedDown)) {
            currentFrame.setFrameAsSpare(pinsKnockedDown);
            this.currentFrame++;
        } else {
            currentFrame.setFrameAsMiss(pinsKnockedDown);
            this.currentFrame++;
        }
        this.calculateScore();
        return this;
    }

    isLastFrame() {
        return this.currentFrame === 10;
    }

    frameIsAStrike(currentFrame, pinsKnockedDown) {
        return pinsKnockedDown == 10 && currentFrame.frameState === ALL_PINS_STANDING && currentFrame.numberOfThrows == 0;
    }

    frameIsInProgress(currentFrame, pinsKnockedDown) {
        return pinsKnockedDown != 10 && currentFrame.numberOfThrows == 0;
    }

    frameIsASpare(currentFrame, pinsKnockedDown) {
        return ((parseInt(currentFrame.getPinsKnockedDown()) + parseInt(pinsKnockedDown)) == 10) && currentFrame.isInProgress();
    }

    setPlayer(player) {
        this.player = player;
    }

    getCurrentFrame() {
        return this.frames[this.currentFrame -1];
    }

    calculateScore() {
        let runningScore =0;
        this.frames.map((frame, index) => {
            if (frame.isScorePending) {

                console.log(index);

            }
        });
        console.log('score');
    }
}

export default Scorecard;
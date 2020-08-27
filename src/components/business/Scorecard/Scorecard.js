import FrameInfo from "../FrameInfo/FrameInfo";
import {isNil} from "lodash";

class Scorecard {

    constructor() {
        this.player = '';
        this.frames = [];
        [...Array(10)].map((x, i) =>
            this.frames.push(new FrameInfo())
        );
        this.currentFrame = 1;
        this.finalScore = 0;
    }

    throwBall(pinsKnockedDown, UpdateGameStatus) {
        let currentFrame = this.getCurrentFrame();
        if(this.isLastFrame()) {
            currentFrame.updateLastFrameThrows(pinsKnockedDown, UpdateGameStatus);
        } else if (currentFrame.frameIsAStrike(pinsKnockedDown)) {
            currentFrame.setFrameAsStrike();
            this.currentFrame++;
        } else if(currentFrame.frameIsInProgress(pinsKnockedDown)) {
            currentFrame.setFrameAsInProgress(pinsKnockedDown);
        } else if(currentFrame.frameIsASpare(pinsKnockedDown)) {
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

    setPlayer(player) {
        this.player = player;
    }

    getCurrentFrame() {
        return this.frames[this.currentFrame -1];
    }

    getNext2Rolls(frameIndex) {
        let rolls = this.frames[frameIndex + 1].pinsKnockedOnThrow.concat(this.frames[frameIndex  + 2].pinsKnockedOnThrow).reduce((rollList, roll) => {

            if(rollList.length < 2 && !isNil(roll)) {
                rollList.push(roll);
            }
        }, []);
        return !isNil(rolls) && rolls.length === 2  ? rolls : null;
    }

    getNextRoll(frameIndex) {
        return this.frames[frameIndex + 1].pinsKnockedOnThrow.length ? this.frames[frameIndex + 1].pinsKnockedOnThrow : null;
    }

    calculateScore() {
        let runningScore =0;
        this.frames.map((frame, index) => {
            if (frame.isScorePending) {
                if(frame.hasStrike()) {
                    let nextRolls = this.getNext2Rolls(index);
                    if(!isNil(nextRolls)) {
                        runningScore = runningScore + 10 + nextRolls.reduce((total, num) => total + num);
                        frame.currentScore(runningScore);
                    }
                } else if(frame.hasSPARE()) {
                    let nextRoll = this.getNextRoll(index);
                    if(nextRoll) {
                        runningScore = runningScore + 10 + this.getNextRoll(index);
                    }
                    frame.currentScore(runningScore);
                }
            }
        });
        console.log('score');
    }
}

export default Scorecard;
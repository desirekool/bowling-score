export const ALL_PINS_STANDING = 'pins';
export const STRIKE = 'strike';
export const SPARE = 'spare';
export const FOUL = 'foul';
export const SPLIT = 'split';

class FrameInfo {

    constructor() {
        this.frameState = ALL_PINS_STANDING;
        this.pinsOnThrow = [];
        this.numberOfThrows = 0;
        this.currentScore = 0;
    }

    setFrameState(frameState) {
        this.frameState = frameState;
    }

    addPinsDownOnThrow(numberOfPinsDown) {
        this.pinsOnThrow.push(numberOfPinsDown);
        this.numberOfThrows++;
    }

    updateCurrentScore(currentScore) {
        this.currentScore = currentScore;
        console.log('Frame score');
    }
}

export default FrameInfo;
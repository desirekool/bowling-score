const whatFrame = function() {
    return this.frame;
};

const notAllPinsDown = pinsDown => pinsDown <= 10;

// First Throw

class Throw {
    constructor(frame) {
        this.score = null;
        this.frame = frame;
    }

    assignScore(pinsDown) {
        if (this.notAllPinsDown(pinsDown)) { this.score = pinsDown };
        return this.score;
    }
}

Throw.prototype.whatFrame = whatFrame;
Throw.prototype.notAllPinsDown = notAllPinsDown

// Second Throw

class SecondThrow {
    constructor(frame) {
        this.score = null;
        this.frame = frame;
    }

    throw1Score() {
        return this.frame.throw1.score;
    }

    assignScore(pinsDown) {
        if (this.isFinalFrame() && this.notAllPinsDown(pinsDown)) {
            this.score = pinsDown;
        } else if (pinsDown <= 10 - this.throw1Score()) {
            this.score = pinsDown;
        }
        return this.score;
    }

    isFinalFrame() {
        return this.frame.type === 'FinalFrame'
    }
}

SecondThrow.prototype.whatFrame = whatFrame;
SecondThrow.prototype.notAllPinsDown = notAllPinsDown

// Third Throw

class ThirdThrow {
    constructor(frame) {
        this.score = null;
        this.frame = frame;
    }

    throw1Score() {
        return this.frame.throw1.score;
    }

    assignThirdScore(pinsDown) {
        if (this.notAllPinsDown(pinsDown)) { this.score = pinsDown };
        return this.score;
    }
}

ThirdThrow.prototype.whatFrame = whatFrame;
ThirdThrow.prototype.notAllPinsDown = notAllPinsDown
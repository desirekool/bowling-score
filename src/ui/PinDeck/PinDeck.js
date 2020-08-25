import React, {useState} from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import FrameInfo, {MISS, SPARE, STRIKE} from "../../components/business/FrameInfo/FrameInfo";
import {PinDeckWrapper} from "./styles";

//TODO: move logic to scorecard
function PinDeck(props) {

    const [pinsStanding, setPinsStanding] = useState(10);
    // const [throwCount, setThrowCount] = useState();

    function handleBallThrow(e) {
        const pinsDown = e.target.value;
        let frameInfo = new FrameInfo();

        frameInfo.addPinsDownOnThrow(pinsDown);
        frameInfo.numberOfThrows = props.frame.numberOfThrows + 1;
        if(props.pinsOntheDeck === 10) {
            if(pinsDown === 10) {
                frameInfo.setFrameState(STRIKE);
                frameInfo.currentScore(30);
            }
        }

        if(props.frame.numberOfThrows > 0) {
            if(props.pinsOntheDeck === pinsDown) {
                frameInfo.setFrameState(SPARE);
                frameInfo.currentScore(20);
            } else {
                frameInfo.setFrameState(MISS);
                frameInfo.currentScore(10 -  (props.pinsOntheDeck - pinsDown));
            }
        }
        setPinsStanding(pinsStanding - pinsDown);
        // setThrowCount(throwCount + 1);
    }

    return (
        <PinDeckWrapper>
            <Button
                size={"small"}
                title={"0"}
                onClick={handleBallThrow}
                value={'0'}
            >
                0
            </Button>
            {[...Array(pinsStanding)].map((button, index) =>
                <Button
                    size={"small"}
                    title={index + 1}
                    onClick={handleBallThrow}
                    value={index + 1}
                >
                    {index + 1}
                </Button>
            )}
        </PinDeckWrapper>
    );
}

export default PinDeck;
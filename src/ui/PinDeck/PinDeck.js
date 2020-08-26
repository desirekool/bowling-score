import React, {useState} from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import FrameInfo, {MISS, SPARE, STRIKE} from "../../components/business/FrameInfo/FrameInfo";
import {PinDeckWrapper} from "./styles";

//TODO: move logic to scorecard
function PinDeck(props) {

    function handleBallThrow(e) {
        const pinsKnockedDown = e.target.value;
        props.throwBall(pinsKnockedDown)
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
            {[...Array(props.pinsOntheDeck)].map((pin, index) =>
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
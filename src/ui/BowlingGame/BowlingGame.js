import React, {useState} from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import FrontOffice from "../FrontOffice/FrontOffice";
import PinDeck from "../PinDeck/PinDeck";
import Scorecard from "../../components/business/Scorecard/Scorecard";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import {ALL_PINS_STANDING} from "../../components/business/FrameInfo/FrameInfo";
import {isNil} from "lodash";

//TODO: Use useEffect Hook to simplify the code??

function BowlingGame() {
    const [gameInProgress, setGameInProgress] = useState(false);
    const [pinsOnTheDeck, setPinsOnTheDeck] = useState(10);
    const [scorecard, setScorecard] = useState(null);
    const [counter, setCounter] = useState(null);

    function startGame() {
        setGameInProgress(!isNil(scorecard.player) && scorecard.player.length ? true : false);
    }

    function stopGame() {
        setGameInProgress(false);
        setPinsOnTheDeck(10);
        setScorecard(null);
    }

    function UpdateGameInLastFrame(message) {
        if(message=== '') {
            setGameInProgress(false);
        } else {
            setPinsOnTheDeck(10);
        }
    }

    function handleAddPlayer(newPlayer) {
        const sc = new Scorecard();
        sc.setPlayer(newPlayer);
        setScorecard(sc);
    }

    function handleBallThrow(pinsKnockedDown) {
        setScorecard(scorecard.throwBall(pinsKnockedDown, UpdateGameInLastFrame));
        setCounter(counter + 1)
        if (scorecard.getCurrentFrame().isNewFrame()) {
            setPinsOnTheDeck(10);
        } else {
            setPinsOnTheDeck(pinsOnTheDeck - pinsKnockedDown);
        }
    }

    return (
        <div className={'game-wrapper'}>
            <FrontOffice
                startGame = {startGame}
                stopGame = {stopGame}
                addPlayer = {handleAddPlayer}
                gameStatus = {gameInProgress}
            />
            {(scorecard ?
                <ScoreBoard
                    score={scorecard}
                    counter={counter}
                /> : null
            )}

            {(gameInProgress ?
                <PinDeck
                    pinsOntheDeck={pinsOnTheDeck}
                    throwBall={handleBallThrow}
                /> : null
            )}
        </div>
    );
}

export default BowlingGame;
import React, {useState} from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import FrontOffice from "../FrontOffice/FrontOffice";
import PinDeck from "../PinDeck/PinDeck";
import Scorecard from "../../components/business/Scorecard/Scorecard";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

//TODO: Use useEffect Hook to simplify the code??

function BowlingGame() {
    const [gameInProgress, setGameInProgress] = useState(false);
    const [player, setPlayer] = useState('');
    const [pinsOnTheDeck, setPinsOnTheDeck] = useState(10);
    const [scorecard, setScorecard] = useState(null);
    const [currentFrameNumber, setCurrentFrameNumber] = useState(0);

    function startGame() {
        setCurrentFrameNumber(0);
        setGameInProgress(player.length ? true:false);
    }

    function stopGame() {
        setGameInProgress(false);
        setPinsOnTheDeck(10);
        setPlayer('');
        setScorecard(null);
        setCurrentFrameNumber(0);
    }

    function handleAddPlayer(newPlayer) {
        const sc = new Scorecard();
        sc.setPlayer(newPlayer);
        setScorecard(sc);
        setPlayer(newPlayer);
    }

    function handleBallThrow(ballThrow) {
        setPinsOnTheDeck(ballThrow);
    }

    function getCurrentFrameInfo() {
        return currentFrameNumber > 0 ? scorecard.frames[currentFrameNumber - 1]: null;
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
                /> : null
            )}

            {(gameInProgress ?
                <PinDeck
                    pinsOntheDeck={pinsOnTheDeck}
                    throwBall={handleBallThrow}
                    frame={getCurrentFrameInfo}
                    frameNumber={currentFrameNumber}
                /> : null
            )}
        </div>
    );
}

export default BowlingGame;
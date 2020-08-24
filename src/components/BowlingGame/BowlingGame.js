import React, {useState} from 'react';
import StartBowling from "../StartBowling/StrartBowling";
import PinDeck from "../PinDeck/PinDeck";
import Scorecard from "../Scorecard/Scorecard";

function BowlingGame() {

    const [gameInProgress, setGameInProgress] = useState(false);
    const [player, setPlayer] = useState('');
    const [pinsOnTheDeck, setPinsOnTheDeck] = useState(10);
    const [frameState, setFrameState] = useState(0);
    const [frameStart, setFrameStart] = useState(true);
    let scorecard = null;
    function handleStartGame() {
        setGameInProgress(player.length ? true:false);
    }

    function handleAddPlayer(newPlayer) {
        scorecard = new Scorecard(newPlayer);
        setPlayer(newPlayer);
    }

    function handleBallThrow(ballThrow) {
        setPinsOnTheDeck(ballThrow);
    }

    return (
        <div>
            {(!gameInProgress ?
                <StartBowling
                    startGame = {handleStartGame}
                    addPlayer = {handleAddPlayer}
                /> : null
            )}

            {(player.length ?
                <div className="panel panel-default">
                    Add Game Panels Here -- reactStyle
                </div> : null
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
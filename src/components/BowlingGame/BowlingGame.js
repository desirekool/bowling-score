import React, {useState} from 'react';
import StartBowling from "../StartBowling/StrartBowling";
import PinDeck from "../PinDeck/PinDeck";
function BowlingGame() {

    const [gameInProgress, setGameInProgress] = useState(false);
    const [player, setPlayer] = useState('');
    const [pinsOnTheDeck, setPinsOnTheDeck] = useState(10);
    const [frameState, setFrameState] = useState(0);
    function handleStartGame() {
        setGameInProgress(player.length ? true:false);
    }

    function handleAddPlayer(newPlayer) {
        setPlayer(newPlayer);
    }

    function handleBallThrow(ballThrow) {
        setPinsOnTheDeck(player);
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
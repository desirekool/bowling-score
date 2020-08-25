import React, {useState} from 'react';
import StartBowling from "../../components/Utils/FrontOffice/StrartBowling";
import PinDeck from "../PinDeck/PinDeck";
import Scorecard from "../../components/business/Scorecard/Scorecard";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

function BowlingGame() {

    const [gameInProgress, setGameInProgress] = useState(false);
    const [player, setPlayer] = useState('');
    const [pinsOnTheDeck, setPinsOnTheDeck] = useState(10);
    const [scorecard, setScorecard] = useState(null);
    function handleStartGame() {
        setGameInProgress(player.length ? true:false);
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

    return (
        <div>
            {(!gameInProgress ?
                <StartBowling
                    startGame = {handleStartGame}
                    addPlayer = {handleAddPlayer}
                /> : null
            )}

            {(scorecard ?
                    <ScoreBoard
                        score={scorecard}
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
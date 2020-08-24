import React, {useState} from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

function ScoreBoard(props) {

    const [pinsStanding, setPinsStanding] = useState(10);

    function handleBallthrow(e) {
        const pinsDown = e.target.value;
        setPinsStanding(pinsStanding - pinsDown);
    }

    return (
        <div>Scoreboard</div>
    );
}

export default ScoreBoard;
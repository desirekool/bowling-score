import React, {useState} from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

function PinDeck() {

    const [pinsStanding, setPinsStanding] = useState(10);

    function handleBallRoll(e) {
        const pinsDown = e.target.value;
        setPinsStanding(pinsStanding - pinsDown);
    }

    return (
        [...Array(pinsStanding)].map((x, i) =>
            <Button title="Throw Ball"
                 onClick={handleBallRoll}
                 value={i + 1}>
                {i + 1}
            </Button>
        )
    );
}

export default PinDeck;
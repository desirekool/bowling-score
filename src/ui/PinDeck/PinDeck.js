import React, {useState} from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

function PinDeck(props) {

    const [pinsStanding, setPinsStanding] = useState(10);

    function handleBallthrow(e) {
        const pinsDown = e.target.value;
        setPinsStanding(pinsStanding - pinsDown);
    }

    return (
        [...Array(pinsStanding)].map((x, i) =>
            <Button title="Throw Ball"
                 onClick={handleBallthrow}
                 value={i + 1}>
                {i + 1}
            </Button>
        )
    );
}

export default PinDeck;
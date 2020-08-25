import React, { useState } from "react";
import { Field, Input} from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

function StartBowling(props) {

    const [name, setName] = useState('');

    function handleNameSubmit(e) {
        e.preventDefault();
        props.addPlayer(name);
    }

    function handleStartGame(e) {
        e.preventDefault();
        props.startGame();
    }

    return (
        <Row justifyContent="between">
            <Button title="Click to Start game"
                 onClick={handleStartGame}
                 value="start">Start Game »
            </Button>
            <Row justifyContent="between">
                <Col>
                    <Button title="Click to create another game"
                         onClick={handleNameSubmit}
                         value="start">Add Player »
                    </Button>
                </Col>
                <Col>
                    <Field>
                        <Input
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </Field>
                </Col>
            </Row>
        </Row>
    );
}

export default StartBowling;
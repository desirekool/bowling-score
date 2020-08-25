import React, { useState } from "react";
import { Field, Input} from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import {FrontOfficeWrapper} from "./styles";

//TODO: Add Reset Button for Game in Progress

function FrontOffice(props) {

    const [name, setName] = useState('');

    function handleNameSubmit(e) {
        e.preventDefault();
        props.addPlayer(name);
    }

    function handleStartGame(e) {
        e.preventDefault();
        props.startGame();
    }

    function handleResetGame(e) {
        e.preventDefault();
        props.stopGame();
    }

    return (
        <Row justifyContent="between">
            <Col>
                {(!props.gameStatus ?
                <Button title="Click to Start game"
                     onClick={handleStartGame}
                     value="start">Start Game »
                </Button> : null
                )}
            </Col>
            {(props.gameStatus ?
                <Col>
                    <Button title="stop game"
                            onClick={handleResetGame()}
                            value="start">Stop Game »
                    </Button>
                </Col> : null
            )}
            <Col>
                {(!props.gameStatus ?
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
                    </Row> : null
                )}
            </Col>
        </Row>
    );
}

export default FrontOffice;
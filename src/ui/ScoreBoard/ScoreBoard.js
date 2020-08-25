import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Header, HeaderItem, HeaderItemWrapper } from '@zendeskgarden/react-chrome'
import Frame from "../Frame/Frame";

function ScoreBoard(props) {
    return (
        <>
            <Header isStandalone={true}>
                <HeaderItemWrapper maxX>
                    <span>{props.score.player}</span>
                </HeaderItemWrapper>
            </Header>
            <Row>
                {(props.score.frames.map((x, i) =>
                    <Col><Frame
                            index={i}
                    /></Col>
                ))}

            </Row>
        </>
    );
}

export default ScoreBoard;
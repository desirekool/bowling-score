import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Header, HeaderItem, HeaderItemWrapper } from '@zendeskgarden/react-chrome'


function ScoreBoard(props) {
    return (
        <Row>
            <Col>
                <Header isStandalone={true}>
                    <HeaderItemWrapper maxX>
                        <span>{props.score.player}</span>
                    </HeaderItemWrapper>
                </Header>
                <Row>
                    {(props.score.frames.map((x, i) =>
                        <Col>frame {i}</Col>
                    ))}
                </Row>

            </Col>
        </Row>
    );
}

export default ScoreBoard;
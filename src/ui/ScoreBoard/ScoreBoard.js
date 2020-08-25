import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Header, HeaderItem, HeaderItemWrapper } from '@zendeskgarden/react-chrome'
import Frame from "../Frame/Frame";
import {ScoreWrapper, FinalScore} from "./styles";

function ScoreBoard(props) {
    return (
        <>
            <Header isStandalone={true}>
                <HeaderItemWrapper maxX>
                    <span>{props.score.player}</span>
                </HeaderItemWrapper>
            </Header>
            <ScoreWrapper>
                {(props.score.frames.map((frame, index) =>
                    <Frame
                        index={index + 1}
                        frame = {frame}
                    />
                ))}
                <FinalScore>
                    299
                </FinalScore>


            </ScoreWrapper>
        </>
    );
}

export default ScoreBoard;
import React from 'react';
import { Header, HeaderItemWrapper } from '@zendeskgarden/react-chrome'
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
                    {!isNaN(props.score.runningScore) ? props.score.runningScore : ''}
                </FinalScore>
            </ScoreWrapper>
        </>
    );
}

export default ScoreBoard;
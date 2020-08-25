import React from 'react';
import {FrameWrapper, FramePinsWrapper, FrameNumber, StrikeThrow, SpareThrow, BonusThrow, FrameCurrentScore} from "./styles";

function Frame(props) {
    return (

        <FrameWrapper FirstFrame={props.index === 1}>
            <FrameNumber>{props.index}</FrameNumber>
            <FramePinsWrapper>
                <StrikeThrow LastFrame={props.index===10}>
                    10
                </StrikeThrow>
                <SpareThrow>
                    10
                </SpareThrow>
                {props.index===10 ?
                    <BonusThrow>
                        10
                    </BonusThrow> : null
                }
            </FramePinsWrapper>
            <FrameCurrentScore>
                299
            </FrameCurrentScore>
        </FrameWrapper>
    );
}

export default Frame;
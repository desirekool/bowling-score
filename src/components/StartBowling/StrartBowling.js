import React from "react";
import {BowlingActionButton, SectionStartBowling} from "./styles";
import Button from "../Button/Button";

function StartBowling() {

    return (
        <SectionStartBowling>
            <BowlingActionButton id="btn033" type="button"
                    className="btn btn-default pull-right"
                    title="Click to create another game"
                    value="start">Add Another Game »
            </BowlingActionButton>
            <BowlingActionButton id="btn034" type="button"
                    className="btn btn-default pull-right"
                    title="Click to Start game"
                    value="start">Start Game »
            </BowlingActionButton>
        </SectionStartBowling>
    );
}

export default StartBowling;
import React from "react";

function StartBowling() {

    return (
        <React.Fragment>
            <div className="btn-toolbar pinButtons" >
                <button id="btn033" type="button"
                        className="btn btn-default pull-right"
                        title="Click to create another game"
                        value="start">Add Another Game »
                </button>
                <button id="btn034" type="button"
                        className="btn btn-default pull-right"
                        title="Click to Start game"
                        value="start">Start Game »
                </button>
            </div>
        </React.Fragment>
    );
}

export default StartBowling;
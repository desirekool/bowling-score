import React from 'react';
import StartBowling from "../StartBowling/StrartBowling";
function BowlingGame() {

    return (
        <div >
            <StartBowling/>
            <div className="panel panel-default">
                Add Game Panels Here -- reactStyle
            </div>

            <div className="btn-toolbar pinButtons" >
                <button id="btn0" type="button" className="btn btn-default" title="No pins knocked down" value="0" >0</button>
                <button id="btn1" type="button" className="btn btn-default" title="1 pin knocked down"  value="1" >1</button>
                <button id="btn2" type="button" className="btn btn-default" title="2 pins knocked down" value="2" >2</button>
                <button id="btn3" type="button" className="btn btn-default" title="3 pins knocked down" value="3" >3</button>
                <button id="btn4" type="button" className="btn btn-default" title="4 pins knocked down" value="4" >4</button>
                <button id="btn5" type="button" className="btn btn-default" title="5 pins knocked down" value="5" >5</button>
                <button id="btn6" type="button" className="btn btn-default" title="6 pins knocked down" value="6" >6</button>
                <button id="btn7" type="button" className="btn btn-default" title="7 pins knocked down" value="7" >7</button>
                <button id="btn8" type="button" className="btn btn-default" title="8 pins knocked down" value="8" >8</button>
                <button id="btn9" type="button" className="btn btn-default" title="9 pins knocked down" value="9" >9</button>
                <button id="btn10" type="button" className="btn btn-default" title="10 pins knocked down" value="10" >10</button>
            </div>
        </div>
    );
}

export default BowlingGame;
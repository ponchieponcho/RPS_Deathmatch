import React from 'react';

let Options = () => {

    return(
    <div className="choice-container">
        <span>DO THE THING!:</span>
        <input type="radio" id="rockChoice"
        name="selection" value="rock"/>
        <label for="rockChoice">Rock</label>

        <input type="radio" id="paperChoice"
        name="selection" value="paper"/>
        <label for="paperChoice">Paper</label>

        <input type="radio" id="scissorChoice"
        name="selection" value="scissor"/>
        <label for="scissorChoice">Paper</label>
    </div>
    )
}

export default Options;

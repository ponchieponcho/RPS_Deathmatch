import React from 'react';

let Options = ({handleSelection}) => {

    return(
    <div className="choice-container">
        <span>DO THE THING!:</span>
        <input type="radio" id="rockChoice"
        name="selection" value="rock" onClick={ event => handleSelection(event.target.value)} defaultChecked/>
        <label htmlFor="rockChoice">Rock</label>

        <input type="radio" id="paperChoice"
        name="selection" value="paper" onClick={ event => handleSelection(event.target.value)} />
        <label htmlFor="paperChoice">Paper</label>

        <input type="radio" id="scissorChoice"
        name="selection" value="scissors" onClick={ event => handleSelection(event.target.value)} />
        <label htmlFor="scissorChoice">Scissors</label>
    </div>
    )
}

export default Options;

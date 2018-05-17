import React from 'react';
import RPSIcons from '../components/RPSIcons';

let Options = ({handleSelection}) => {

    return(
    <div className="choice-container">
        <RPSIcons handleSelection={handleSelection}/> 
    </div>
    )
}

export default Options;


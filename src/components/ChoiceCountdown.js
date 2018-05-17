import React from 'react';

let ChoiceCountdown = ({choice_countdown}) => { 
    return(
        <div className="countdown-bg">
            <div className="choice-num">
            {choice_countdown}
            </div>
        </div>
    )
}


export default ChoiceCountdown;

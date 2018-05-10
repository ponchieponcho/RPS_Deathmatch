import React from 'react';

let ReadyCheckmark = ({ready}) => {
    if(ready === false) {
        return (
            <i className="far fa-circle"/>
        )
    } else {
        return (
        <i className="far fa-check-circle"></i>
        )
    }
}

export default ReadyCheckmark;

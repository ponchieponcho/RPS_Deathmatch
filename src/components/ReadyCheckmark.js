import React from 'react';

let ReadyCheckmark = ({ready}) => {
    if(ready === false) {
        return (
            <i className="far fa-circle red"/>
        )
    } else {
        return (
        <i className="far fa-check-circle green"></i>
        )
    }
}

export default ReadyCheckmark;

import React from 'react';

let ReadyMsg = ({ready}) => {
    if(ready===false){
        return <p>READY UP!</p>
    } else {
        return <p>PREPARE TO FIGHT!</p>
    }
}
  
export default ReadyMsg;

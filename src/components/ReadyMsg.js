import React from 'react';

let ReadyMsg = ({ready}) => {
    if(ready===false){
        return <p>READY UP!</p>
    } else {
        return <p>YOU READY AS HELL NOW, DAWG!</p>
    }
}
  
export default ReadyMsg;

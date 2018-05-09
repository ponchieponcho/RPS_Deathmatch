import React from 'react';

let ReadyToggle = (props) =>
<label className="switch">
    <input type="checkbox" onClick={props.togglePlayerReady}/>
    <span className="slider round"></span>
</label>
  
export default ReadyToggle;

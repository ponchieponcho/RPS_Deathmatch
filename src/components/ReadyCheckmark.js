import React from 'react';
// import {connect} from 'react-redux';

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

// let mapStateToProps = (state) => {
//     return {
//         ready: state.ready
//     }
// }

export default ReadyCheckmark;

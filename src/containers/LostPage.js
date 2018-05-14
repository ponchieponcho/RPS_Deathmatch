import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class LostPage extends Component {

componentDidMount() {
  
}

 render() {
  return (
    <div>
    You lost!
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LostPage));


import React from 'react';
import {connect} from 'react-redux';

import ReadyCheckmark from './ReadyCheckmark'

let TotalUsers = ({users}) => {
    return( 
    <div>Users in room:
        {
            users.map( (user,i) => {
            return(
            <p key={i}>{user.username} <ReadyCheckmark ready={user.ready}/></p>
            )
            })
        }
    </div>
    )
}

let mapStateToProps = (state) => { 
    return {
      users: state.users
    };
  }

export default connect(mapStateToProps)(TotalUsers);

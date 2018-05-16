import React from 'react';
import {connect} from 'react-redux';

import ReadyCheckmark from './ReadyCheckmark'

let TotalUsers = ({users}) => {
    return( 
    <div className="users">
        {
            users.map( (user,i) => {
            return(
            <div key={i} className="user"> 
                {user.username} 
                <ReadyCheckmark ready={user.ready}/>
            </div>
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

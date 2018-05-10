import React from 'react';
import ReadyCheckmark from './ReadyCheckmark'

let TotalUsers = ({users}) => {
    return( 
    <div>Users in room:
        {
            users.map( (user,i) => {
            return(
            <p key={i}>{user.username} <ReadyCheckmark /></p>
            )
            })
        }
    </div>
    )
}
export default TotalUsers;

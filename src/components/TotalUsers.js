import React from 'react';

let TotalUsers = ({users}) => {

    return( 
    <div>Users in room:
        {
            users.map( (user,i) => <p key={i}>{user.username}</p>)
        }
    </div>
    )
}
export default TotalUsers;

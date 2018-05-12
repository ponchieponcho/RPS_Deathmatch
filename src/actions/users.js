
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_USERS = 'UPDATE_USERS';
export const UPDATE_READY = 'UPDATE_READY';
export const UPDATE_ID = 'UPDATE_ID';
export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';


export const actionUpdateUsername = name => {
    // console.log('actionUpdateUsername', name)
    return {
        type: UPDATE_USERNAME,
        payload: name
    }
  }

export const actionUpdateUsers = users => {
    // console.log('actionUpdateUsers', users)
    return {
        type: UPDATE_USERS,
        payload: users
    }
}

export const actionUpdateReady = ready => {
    // console.log('actionUpdateReady', ready)
    return {
        type: UPDATE_READY,
        payload: ready
    }
}

export const actionUpdateId = id => {
    // console.log('actionUpdateId', id)
    return {
        type: UPDATE_ID,
        payload: id
    }
}

export const actionUpdateCountdown = number => {
    // console.log('actionUpdateCountdown', number)
    return {
        type: UPDATE_COUNTDOWN,
        payload: number
    }
}

export const actionUpdateSelection = sel => {
    // console.log('actionUpdateSelection', sel)
    return {
        type: UPDATE_SELECTION,
        payload: sel
    }
}


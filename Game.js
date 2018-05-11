class Game {
    constructor() {
    this.users = [],
    this.countdown = null,
    this.numOfUsers = 0
    }

    addUser(user) {
        let newUsers = this.users.slice();
        newUsers.push(user)
        this.users = newUsers;
        console.log('addUser:',this.users)
    }

    removeUser(id) {
        console.log(`Disconnected ${id}`)
        let removedUser = this.users.filter( user => user.id !== id)
        this.users = removedUser;
    }

    changeReadyStatus(id, status) {
        let newUsers = this.users.slice();
        let theuser = newUsers.find((user) => user.id === id)
        theuser.ready = status;
        this.users = newUsers;
        if(status === true) {
            this.numOfUsers++
          } else {
            this.numOfUsers--
          }
          console.log('number of users:', this.numOfUsers)
    }

    startCountdown() {
        for (let user of this.users) {
            if(this.numOfUsers === this.users.length){
              console.log('all users ready')
            //   countDown(socket, true)
            }
            else {
              console.log('users are not ready')
            //   countDown(socket, false)
            }
          }
    }
}

module.exports = Game
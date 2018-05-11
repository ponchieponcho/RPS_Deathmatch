class Game {
    constructor() {
    this.users = [],
    this.interval = null,
    this.numOfReadyUsers = 0
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
            this.numOfReadyUsers = this.numOfReadyUsers + 1;
            console.log('ready users:', this.numOfReadyUsers)
          } else {
            this.numOfReadyUsers = this.numOfReadyUsers - 1;
            console.log('ready users:', this.numOfReadyUsers)
          }
    }

    startCountdown(start) {
            if(this.numOfReadyUsers === this.users.length){
              console.log('all users ready')
              this.countDown(start, true)
            }
            else {
              console.log('users are not ready')
              this.countDown(start, false)
            }
    }

    countDown(start, status) {
        console.log('status', status)
        let num = 10;
        if (status === true) {
          this.interval = setInterval( () => {
            if (num >= 0) {
                start(num);
                num--;
              } 
            }, 1000)
        } else if (status === false) { 
          start('');
          clearInterval(this.interval)

          }
      }
}

module.exports = Game
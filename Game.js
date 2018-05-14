class Game {
    constructor() {
    this.users = [],
    this.tournament = [],
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
            // console.log('ready users:', this.numOfReadyUsers)
          } else {
            this.numOfReadyUsers = this.numOfReadyUsers - 1;
            // console.log('ready users:', this.numOfReadyUsers)
          }
    }

    changeSelection(id, selection) {
        let newUsers = this.users.slice();
        let theuser = newUsers.find((user) => user.id === id)
        theuser.selection = selection;
        this.users = newUsers;
    }

    startCountdown(start) {
            if(this.numOfReadyUsers === this.users.length){
            //   console.log('all users ready')
              this.countDown(start, true)
            }
            else {
            //   console.log('users are not ready')
              this.countDown(start, false)
            }
    }

    countDown(start, status) {
        // console.log('status', status)
        let num = 5;
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

    handlePairUp(users) {
        let newUsers = users.slice();
        let arr = [];
        let i = 0;
        while ((newUsers[0]) && (newUsers[1])) {
            arr[i] = [newUsers[0], newUsers[1]];
            newUsers.splice(0,1);
            newUsers.splice(0,1);
            i++;
        }
        if (newUsers[0]) {
            if (newUsers[0].status === 'winner') {
                console.log(`${newUsers[0].username} is the winner!`);
            } else {
                newUsers[0].status = 'waiting';
                arr[i] = [newUsers[0]];
            }
        }
        
        this.tournament = arr.slice();
        console.log('this.tournament at end of handle pairup', this.tournament)
        // return arr
    };

    vsStart(tournament, sendOpponent, sendWait, sendWin) {
        for (let i = 0 ; i < tournament.length; i++) {
            if (tournament[i].length === 2) {
                console.log(`${tournament[i][0].username} VS ${tournament[i][1].username}`)
                sendOpponent(tournament[i][0].username, tournament[i][0].id, tournament[i][1].username, tournament[i][1].id)
                } 
            else if (tournament[i].length === 1) {
                if(tournament[i][0].status === "waiting") {
                    console.log('waiting', tournament[i][0].id)
                    sendWait(tournament[i][0].id)
                    } 
                else if (tournament[i][0].status === "winner") {
                    console.log('winner', tournament[i][0].id)
                    sendWin(tournament[i][0].id)
                    }
            } 
        }
    }

    rPS(playerId, opponentId) {
        let playerOne = this.tournament.find((user) => user.id === playerId )
        let playerTwo = this.tournament.find((user) => user.id === opponentId )
        console.log(playerOne.username, playerOne.selection)
        console.log(playerTwo.username, playerTwo.selection)
    
        if (playerOne.selection === playerTwo.selection ){
            // Got to figure this out *****
            return [playerOne, playerTwo];
        }
    
        if (playerOne.selection === "rock" ){
            if(playerTwo.selection === "scissors") {
                this.tournament = tournament.filter( user => user.id !== playerTwo.id)
                return playerOne;
            } else{
                tournament = tournament.filter( user => user.id !== playerOne.id)
                return playerTwo;
            }
        }
    
        if (playerOne.selection === "paper" ){
            if (playerTwo.selection === "rock" ){
                this.tournament = tournament.filter( user => user.id !== playerTwo.id)
                return playerOne;
            } else{
                this.tournament = tournament.filter( user => user.id !== playerOne.id)
                return playerTwo;
            }
        }
    
        if (playerOne.selection === "scissors"){
            if (playerTwo.selection === "rock"){
                this.tournament = tournament.filter( user => user.id !== playerTwo.id)
                return playerOne;
            } else{
                this.tournament = tournament.filter( user => user.id !== playerOne.id)
                return playerTwo;
            }
        }
    }
    
}

module.exports = Game
class Game {
    constructor() {
    this.users = []
    this.countdown = null
    }

    addUser(user) {
        let newusers = this.users.slice();
        newusers.push(user)
        this.users = newusers;
    }
}

module.exports= Game
const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.on('userLoggedIn', (user) => {
            console.log(`TIMESTAMP: ${user} logged in`);
        });

        this.on('userLoggedOut', (user) => {
            console.log(`TIMESTAMP: ${user} logged out`);
        });
    }
}

module.exports = UserEventEmitter;
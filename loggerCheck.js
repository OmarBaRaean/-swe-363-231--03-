const UserEventEmitter = require('./UserEventEmitter');
const emitter = new UserEventEmitter();

function simulateUserLogIn() {
    setTimeout(() => {
        let randomUser = 'User ' + Math.floor(Math.random() * 100);
        emitter.emit('userLoggedIn', randomUser);
        simulateUserLogOut();
    }, Math.random() * 2000);
}

function simulateUserLogOut() {
    setTimeout(() => {
        let randomUser = 'User ' + Math.floor(Math.random() * 100);
        emitter.emit('userLoggedOut', randomUser);
        simulateUserLogIn();
    }, Math.random() * 2000);
}

simulateUserLogIn();
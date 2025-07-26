// // Import the events module
// const events = require("events");

// // Create an instance of EventEmitter
// const eventEmitter = new events.EventEmitter();

// // Define listener functions
// const listenerOne = function () {
//     console.log("Listener one is executed");
// };

// const listenerTwo = function () {
//     console.log("Listener two is executed");
// };

// // Add listeners to the 'greet' event
// eventEmitter.on("greet", listenerOne);
// eventEmitter.on("greet", listenerTwo);

// // Add another listener with a parameter
// eventEmitter.on("greet", (name) => {
//     console.log(`Hello ${name}`);
// });

// // Emit the 'greet' event and pass a name
// eventEmitter.emit("greet", "Cindy");

// //to remove event//
// eventEmitter.removeListener("greet")

// //for once//
// eventEmitter.addListener("greet", listenerOne);
// eventEmitter.once('greet', listenerTwo);

// clas task
// create login , when the user logs in  welcome the user bback, console log it.

const events = require("events");

// Create an instance of EventEmitter
const eventEmitter = new events.EventEmitter();

// Define a listener for the 'login' event
eventEmitter.on("login", (username) => {
    console.log(`Welcome back, ${username}!`);
});

// Simulate a user login
function loginUser(username) {
    console.log(`User ${username} is trying to log in...`);
    // Emit the login event
    eventEmitter.emit("login", username);
}

// Example usage
loginUser("Sarah");

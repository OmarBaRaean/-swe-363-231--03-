const readline = require('readline')

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
})

// Predefined questions and answers
const QnA = {
 'hello': 'Hello! How can I help you today?',
 'how are you': 'I\'m a bot, so I\'m doing great! How about you?',
 'exit': 'Exiting...'
};

// Prompt the user for input
rl.question('You: ', (input) => {
 const userInput = input.toLowerCase();

 // Determine the appropriate response based on the predefined questions
 let response = 'Sorry, I didn\'t understand that. Can you please repeat?';
 if (userInput in QnA) {
    response = QnA[userInput];
 }

 // Display the response and prompt the user for more input
 console.log('Chatbot: ' + response);
 rl.close();
});

// Handle the 'close' event to exit gracefully
rl.on('close', () => {
 console.log('Have a great day!');
 process.exit(0);
});
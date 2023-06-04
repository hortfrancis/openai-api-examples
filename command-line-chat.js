// Import modules and configure environment
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const readline = require('readline');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declare the 'conversation array'
const conversationArray = [];

// Add initial instructions to the AI model
conversationArray.push({
    role: 'system',
    content: "You are a helpful, friendly assistant. Please answer any questions put to you."
});

/*
    * This function calls the API and returns the response
*/
async function callAPI() {
    try {
        // Call the API
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: conversationArray,
        });
        return response.data.choices[0].message;

    } catch (error) {
        // Error handling for API call
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

/*
    * This function handles the conversation and user input
*/
async function chat() {

    rl.question('You: ', async (userInput) => {

        // Add user input to the conversation array
        conversationArray.push({
            role: 'user',
            content: userInput
        });

        // Call the API
        const response = await callAPI();

        // Add answer from the AI model to the conversation array
        conversationArray.push(response);

        // Display the answer from the AI model to the user
        console.log('Bot: ', response.content);

        chat(); // repeat the question-answer cycle indefinitely
    });
}

// Call the chat function to start the conversation when the program is run
chat();
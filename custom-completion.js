require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const userInput = process.argv[2];

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: userInput,
            max_tokens: 60
        });
        console.log(completion.data.choices[0].text);
    } catch (error) {
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
})();
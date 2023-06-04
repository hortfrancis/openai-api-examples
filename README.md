# OpenAI API examples

This repository provides code snippets to help programmers make use of the [OpenAI API](https://platform.openai.com/docs/api-reference/). Feel free to use this code in your own projects!

This code is written in JavaScript. The programs in each file are designed to work in Node.js -- v19.6.0 was used during testing. 

There is a tutorial article to go with this repo: [medium.com/@hortfrancis/creating-a-gpt-powered-command-line-app-with-node-19e91de38120](https://medium.com/@hortfrancis/creating-a-gpt-powered-command-line-app-with-node-19e91de38120)

## How to use 

Feel free to copy and paste this code into any projects. 

### Running locally

Install dependencies:

```bash 
npm i
```

You will need an API key from OpenAI to access the API endpoint. 

API keys can be found at [platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

Create a file named `.env` at the top level of the project directory. 

Add your API key to `.env`; if your API key were `12345` you would write: 

```
OPENAI_API_KEY=12345
```

#### Run the command line chat program

```bash
node command-line-chat.js
```

... or:

```bash
npm start
```

Use `CTRL`+`C` to end the program. 

#### Run the default text completion with `fetch()` program:

```bash
node default-completion.js
```

The prompt is hard-coded as `Describe a delicious egg in one sentence.`

#### Run the custom text completion with the `openai` Node module

```bash
node custom-completion.js "[prompt]"
```

For example, if your prompt is `How long is a piece of string?`: 

```bash 
node custom-completion.js "How long is a piece of string?"
```

## Dependencies 

- openai
- dotenv
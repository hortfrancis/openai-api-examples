require('dotenv').config();

fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': "Describe a delicious egg in one sentence.",
        max_tokens: 60
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
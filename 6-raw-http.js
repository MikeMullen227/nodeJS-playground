const https = require('https');
const url = 'https://api.darksky.net/forecast/2fdc967638822edf6f3803cfc783f9a4/40,-75?lang=en';

const request = https.request(url, (response)=> {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end();
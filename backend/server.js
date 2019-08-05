var express = require('express'); // Include express
//Create express app
var app = express();
var messages = [{text: 'Hi. Are you there?', owner: 'Kiran Dash'}, {text: 'You are very rich!', owner: 'Bholanath Dash'}];
// Creating a test route to check if app is working
app.get('/', (req, res) => {
    res.send('hello');
})

// Creating a service endpoint 'messages'
app.get('/messages', (req,res) => {
    res.json(messages); // returning json object in response
});

// Application starting
app.listen(1234);
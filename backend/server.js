var express = require('express'); // Include express
//Create express app
var app = express();

// Creating a test route to check if app is working
app.get('/', (req, res) => {
    res.send('hello');
})

// Application starting
app.listen(1234);
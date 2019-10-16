const express = require('express');
const app = express();
const sports = require('./models/sports.js');



const PORT = 3000;


// display sports as json route
// app.get('/sports', (req, res) => {
//   res.send(sports);
// });


// display index route
app.get('/sports', (req, res) => {
  	res.render('index.ejs', {
    	iRSports: sports //indexRouteSports
    });
});




















app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});

module.exports = app;

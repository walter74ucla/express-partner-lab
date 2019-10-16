const express = require('express');
const app = express();
const methodOverride = require('method-override')

const sports = require('./models/sports.js');

const PORT = 3000;

// middleware
app.use(methodOverride('_method'));

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

// display the populated form
app.get('/sports/:index/edit', (req, res) => {

  res.render('edit.ejs', {
    eRSports: sports[req.params.index], // editRouteSports
    index: req.params.index
  })

});

// delete
app.delete('/sports/:index', (req, res) => {
    // console.log(req.params.index)
    // our logic to delete

    // array method to splice the item out of our model
    // look up splice go to array splice on mdn
    sports.splice(req.params.index, 1);

    res.redirect('/sports');
})



















app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});

module.exports = app;

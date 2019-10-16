const express = require('express');
const app = express();
const Sports = require('./models/sports.js');



const PORT = 3000;


























app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});

module.exports = app;

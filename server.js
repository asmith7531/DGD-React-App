//requireing all dependencies
const express = require('express');
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 3000;

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({
    express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
  });
});

//save new addresses
app.post('/newAddress', function (req, res, next) {
  res.locals.connection.query(
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(5000, function () {
    console.log("App listening on PORT " + PORT);
  });
});
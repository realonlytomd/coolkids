// *****************************************************************************
// Server.js - the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Require the models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/exercise-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Sync the sequelize models and then start the Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

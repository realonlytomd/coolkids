// *********************************************************************************
// html-routes.js - this file sets up routes to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // create exercise route loads create.html
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // exercise route loads exercise.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // users route loads user-manager.html
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-manager.html"));
  });

};


// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the exercises
  app.get("/api/exercises", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // add an "include" property to the options in the findAll query
    // set the value to an array of the models to be included in a left outer join
    // so, just db.User
    db.Exercise.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // Get the route for retrieving a single post
  app.get("/api/exercises/:id", function(req, res) {
    // add an "include" property to the options in the findOne query
    // set the value to an array of the models to be included in a left outer join
    // So, just db.User
    db.Exercise.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // POST route for saving a new exercise
  app.post("/api/exercises", function(req, res) {
    db.Exercise.create(req.body).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // DELETE route for deleting exercises
  app.delete("/api/exercises/:id", function(req, res) {
    db.Exercise.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // PUT route for updating exercises
  app.put("/api/exercises", function(req, res) {
    db.Exercise.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbExercise) {
        res.json(dbExercise);
      });
  });
};

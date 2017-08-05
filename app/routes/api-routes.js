// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var spoonacular=require("../api/spoonacular_api.js")


// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
      console.log(spoonacular)
      res.json(spoonacular);
  });
};
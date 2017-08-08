// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var spoonacular=require("../api/spoonacular_api.js")
var unirest=require("unirest")
var spoon = require("../Controllers/APIController.js")

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/meal-plan", function(req, res) {
      var mealPlan = spoon.getComputeDailyMealPlan(null, null, function(spoonErr, spoonRes){
      if (spoonErr){
        console.log(spoonErr)
        res.json(spoonErr) 
      }
      console.log(spoonRes)
      res.json(spoonRes);
    })
  });
};
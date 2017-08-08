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

  app.get("/api/meal-plan", function(req, res) {

      var mealPlan = spoon.getComputeDailyMealPlan(null, "week", function(spoonErr, spoonRes){
        
      if (spoonErr){
        console.log(spoonErr)
        res.json(spoonErr) 
      }
      res.json(spoonRes);
    })
  });

  app.get("/api/recipe/:id", function(req, res){

    var recipeId = req.params.id
    console.log(req.params.id)
    var recipe = spoon.getRecipeInformation(recipeId, function(spoonErr, spoonRes){

      if (spoonErr){
        console.log(spoonErr)
        res.json(spoonErr) 
      }
      console.log(spoonRes)
      res.json(spoonRes);
    })
      
  })
    
};
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var spoonacular=require("../api/spoonacular_api.js")
var unirest=require("unirest")

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
      unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day")
        .header("X-Mashape-Key", "ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv")
        .header("Accept", "application/json")
      .end(function (result) {
        for (var i = 0; i < result.body.meals.length; i++){
          unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{"+result.body.meals[i].id+"}/information")
            .header("X-Mashape-Key", "ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv")
            .header("Accept", "application/json")
          .end(function (recRes) {
            console.log(recRes.body)
          })
        }
        console.log(result.body.meals)
      })
  });
};
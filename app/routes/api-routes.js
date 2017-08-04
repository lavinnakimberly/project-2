// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var unirest=require("unirest")


// Routes
// =============================================================
module.exports = function(app) {

  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=week")
    .header("X-Mashape-Key", "ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv")
    .header("Accept", "application/json")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

};

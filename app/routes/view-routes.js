// Routes

var spoon = require("../Controllers/APIController.js")
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/api/data", function(req, res) {
  	var mealPlan = spoon.getComputeDailyMealPlan(null, null, function(spoonErr, spoonRes){
  		if (spoonErr){
  			console.log(spoonErr)
  			res.json(spoonErr) 
  		}
  		console.log(spoonRes)
    	res.json(spoonRes);
  	})
  	
  });

  app.get("/books", function(req, res) {
	res.render('index')
  })

};

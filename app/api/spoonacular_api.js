var unirest=require("unirest")


//this is the api call for one day.
//It returns with an ID, Title, prep-time, img URL
function createDayPlan(){
	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day")
    	.header("X-Mashape-Key", "ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv")
    	.header("Accept", "application/json")
    .end(function (result) {
    	// console.log(result.body);
    	return result.body
	});
}

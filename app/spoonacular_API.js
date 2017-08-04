$.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day&X-Mashape-Key=ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv",
    // beforeSend: function (xhr) {
    //     xhr.setRequestHeader ("Authorization", "Basic " + btoa("X-Mashape-Key: ZMh6WFtGZTmshzeHIQXXkO28zrAmp1O695Yjsn4Y9IePA2s0Nv"));
    // },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    contentType: "application/json",
    success: function (data) {
      alert(JSON.stringify(data));
    },
    error: function(){
      alert("Cannot get data");
    }
});
$.get("/api/meal-plan", function(data) {
    $("#breakfast").text(data.meals[0].title)
    $("#lunch").text(data.meals[1].title)
    $("#dinner").text(data.meals[2].title)
});

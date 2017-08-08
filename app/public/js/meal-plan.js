$.get("/api/meal-plan", function(data) {
	for (i=0; i<data.items.length/3; i++){
		var meal = i*3
		var day = i+1

		var breakfast = JSON.parse(data.items[meal].value)
		var lunch = JSON.parse(data.items[meal+1].value)
		var dinner = JSON.parse(data.items[meal+2].value)

		$("#breakfast"+day).text(breakfast.title)
		$("#breakfast"+day).attr("recipe", breakfast.id)

    	$("#lunch"+day).text(lunch.title)
		$("#lunch"+day).attr("recipe", lunch.id)

    	$("#dinner"+day).text(dinner.title)
		$("#dinner"+day).attr("recipe", dinner.id)

	}  
});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

$(".modal-trigger").on("click", function(){
	$.get("/api/recipe/"+$(this).attr("recipe"), function(data) {
		$("#modTitle").text(data.title)
		$("#modImg").attr("src", data.image)
		for(j=0;j<data.extendedIngredients.length;j++){
			$("#ingList").append("<li>"+data.extendedIngredients[j].originalString)
		}
		for(k=0;k<data.analyzedInstructions[0].steps.length;k++){
			$("#recList").append("<li>"+data.analyzedInstructions[0].steps[k].step)
		}
	});
})

//needs to reset modal on close or just adds to last recipe.
$("modal-close").on("click", function(){
	$("#modTitle").text("")
	$("#modImg").attr("src", "#")
	$("#ingList").removeChild()
	$("recList").removeChild()
})
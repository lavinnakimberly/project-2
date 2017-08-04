// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newBook = {
    title: $("#title").val().trim(),
    author: $("#author").val().trim(),
    genre: $("#genre").val().trim(),
    pages: $("#pages").val().trim()
  };

  $.post("/api/new", newBook)
    .done(function(data) {
      console.log(data);
    });

});

$.get("/api/all", function(data) {
  var wellSection = $("<div>");
  wellSection.addClass("well");
  wellSection.attr("id", "book");
  wellSection.text("well");
  $("#well-section").append(wellSection);
});
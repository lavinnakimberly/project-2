// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#login_register_btn").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    firstName: $("#inputFirstName").val().trim(),
    lastName: $("#inputLastName").val().trim(),
    email: $("#inputEmail").val().trim(),
    password: $("#inputPassword").val().trim()
  };

  $.post("/api/new", newUser)
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
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  // When the form is submitted, we validate there's an email and password entered
  
  // $("#modal-submit-btn").click(function(event){
  //   console.log("button clicked");
  //   event.preventDefault();
  //    var userData = {
  //     email: emailInput.val().trim(),
  //     password: passwordInput.val().trim()
  //   }; 
  // });
  // console.log(userData);

  loginForm.on("submit", function(event) {
    console.log("btton clicked");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
      console.log("successful");
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    inputEmail.val("");
    inputPassword.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});

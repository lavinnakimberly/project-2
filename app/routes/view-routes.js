// Routes
var path = require("path");
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/meal-plan", function(req, res) {
    console.log("test")
    res.sendFile(path.join(__dirname, "../public/meal-plan.html"));

  });

};

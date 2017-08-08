// Routes

var spoon = require("../config/connection.js")
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
  	console.log(res)
    res.json(res);
  });

};

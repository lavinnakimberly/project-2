// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var handlebars = require("express-handlebars");
var passport = require("passport");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./app/models");

// Requiring our models for syncing


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(passport.initialize());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Static directory
app.use(express.static("app/public"));

// Set Handlebars.
app.engine("handlebars", handlebars({ 
  defaultLayout: "main", 
  layoutsDir: __dirname + "/app/views/layouts"
}));
app.set("view engine", "handlebars");

app.set("views", __dirname + "/app/views")

require("./app/routes/api-routes.js")(app);
require("./app/routes/view-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

// dependencies
const express = require('express')
const path = require('path');
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes")
var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.get("/:route", function(req, res) {
  let route = req.params.route
  res.sendFile(__dirname, "./app/public" + route + ".html")
})





// listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
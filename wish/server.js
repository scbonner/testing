// Dependencies

const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));      //helps post to work
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "wish_db"
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

// Root get route, and get is to get the main page
app.get("/", (req, res) => {
  connection.query("SELECT * FROM wish;", (err, data) => {
    if (err) throw err;
    console.log(data);
    // Test it
    // console.log('The data is: ', data);

//     // Test it
//     // return res.send(data);

//     res.render("index", { tasks: data });
//   });
// });

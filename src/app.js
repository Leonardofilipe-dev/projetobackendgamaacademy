const express = require("express");
const routes = require("./routes/index");
const db = require("./database/connection");
const handleError = require("./middlewares/handleError.js")



const app = express();


app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.hasConnection()
app.use(routes)

app.use(handleError)

app.listen(5000, ()=>{
  console.log("Server running at port 5000...");
  db.hasConnection();
}); 
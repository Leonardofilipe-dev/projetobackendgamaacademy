const express = require("express");
var cors = require('cors')
const routes = require("./routes/index");
const db = require("./database/connection");
const handleError = require("./middlewares/handleError.js")



const app = express();

app.use(cors())

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
const express = require("express");
const routes = require("./routes/index");
const db = require("./database/connection");

const app = express();

app.use(express());

db.hasConnection()
app.use(routes);

app.listen(5000, ()=>{
  console.log("Server running at port 5000...");
  db.hasConnection();
}); 
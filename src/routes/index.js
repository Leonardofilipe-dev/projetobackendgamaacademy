const express = require("express");

const routes = express.Router();

routes.get("/users");
routes.post("/users");
routes.put("/users/:id");
routes.delete("/users/:id");

module.exports = routes;
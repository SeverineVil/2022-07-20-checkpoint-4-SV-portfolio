const express = require("express");
const { ProjectController } = require("../controllers");

const routes = express.Router();

routes.get("/project", ProjectController.browse);
routes.get("/project/:id", ProjectController.read);
routes.put("/project/:id", ProjectController.edit);
routes.post("/project", ProjectController.add);
routes.delete("/project/:id", ProjectController.delete);

module.exports = routes;

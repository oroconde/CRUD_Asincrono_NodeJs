const { Router } = require("express");
// const { getall, getone, create, deleted } = require("../controllers/controller");
const controller = require("../controllers/controller");
const route = Router();

route.get("/users", controller.getall);  
// route.get("/user/:id", controller.getone);
// route.post("/add", create);
// route.delete("/del/:id", deleted);
// route.put("/users");

module.exports = route;

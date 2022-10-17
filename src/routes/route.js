const { Router } = require("express");
const { getall, getone, create, deleted, update  } = require("../controllers/controller");
// const controller = require("../controllers/controller");
const route = Router();

route.get("/users", getall);  
route.post("/add", create);
route.get("/user/:id", getone);
route.delete("/del/:id", deleted);
route.put("/edit/:id", update);

module.exports = route;

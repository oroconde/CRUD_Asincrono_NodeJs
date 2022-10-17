const { Router } = require("express");
const { getall, getone, create, deleted, update  } = require("../controllers/controller");
const { login } = require("../controllers/login")
const { validation } =require("../middlewares/validations")
const route = Router();


route.post("/login", validation, login );
route.get("/users", getall);  
route.post("/add", create);
route.get("/user/:id", getone);
route.delete("/del/:id", deleted);
route.put("/edit/:id", update);

module.exports = route;

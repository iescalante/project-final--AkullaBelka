const users = require("express").Router();
const getUsers = require("./getUsers");
const postNewUser = require("./postNewUser");
const validateSingleUser = require("./validateSingleUser");

users.get("/", getUsers);
users.post("/",postNewUser);
users.get("/:email/:password", validateSingleUser);


module.exports = users;
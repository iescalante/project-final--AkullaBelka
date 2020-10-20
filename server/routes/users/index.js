const users = require("express").Router();
const getUsers = require("./getUsers");
const postUser = require("./postUser");
const getSingleUser = require("./getSingleUser");

users.get("/", getUsers);
users.post("/",postUser);
users.get("/:email/:password", getSingleUser);


module.exports = users;
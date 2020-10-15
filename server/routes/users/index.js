const users = require("express").Router();
const getUsers = require("./getUsers");
const postUser = require("./postUser");
const getSingleUser = require("./getSingleUser");

users.get("/", getUsers);
users.post("/",postUser);
users.get("/:_id", getSingleUser);


module.exports = users;
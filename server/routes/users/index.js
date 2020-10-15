const users = require("express").Router();
const getUsers = require("./getUsers");
const postUser = require("./postUser");
const singleUser = require("./singleUser");

users.get("/", getUsers);
users.post("/",postUser);
users.get("/:_id", singleUser);


module.exports = users;
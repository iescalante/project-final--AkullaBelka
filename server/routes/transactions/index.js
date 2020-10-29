const transactions = require("express").Router();
const getUserTransactions = require("./getUserTransactions");

transactions.get("/:userId", getUserTransactions);

module.exports = transactions;
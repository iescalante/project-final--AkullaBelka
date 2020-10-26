const loans = require("express").Router();
const getAvailableLoans = require("./getAvailableLoans");

loans.get("/:loanAmount", getAvailableLoans);


module.exports = loans;
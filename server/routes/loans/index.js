const loans = require("express").Router();
const getAvailableLoans = require("./getAvailableLoans");
const userRequestsLoan = require("./userRequestsLoan");

loans.get("/:loanAmount", getAvailableLoans);
loans.put("/:userId/:lenderId", userRequestsLoan);


module.exports = loans;
const loans = require("express").Router();
const getAvailableLoans = require("./getAvailableLoans");
const updateUsersWithLoan = require("./updateUsersWithLoan");

loans.get("/:loanAmount", getAvailableLoans);
loans.put("/:userId/:lenderId", updateUsersWithLoan);


module.exports = loans;
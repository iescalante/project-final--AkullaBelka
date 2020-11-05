const loans = require("express").Router();
const getAvailableLoans = require("./getAvailableLoans");
const userRequestsLoan = require("./userRequestsLoan");
const getAllLoansToPay = require("./getAllLoansToPay");

loans.get("/all", getAllLoansToPay);
loans.get("/:loanAmount", getAvailableLoans);
loans.put("/:userId/:lenderId", userRequestsLoan);



module.exports = loans;
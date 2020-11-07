const loans = require("express").Router();
const getAvailableLoans = require("./getAvailableLoans");
const userRequestsLoan = require("./userRequestsLoan");
const getAllLoansToPay = require("./getAllLoansToPay");
const getUserLoansToPay = require("./getUserLoansToPay");
const userSendsPayment = require("./userSendsPayment");

loans.get("/all", getAllLoansToPay);
loans.get("/all/:userId", getUserLoansToPay);
loans.put("/all/:userId/:lenderId", userSendsPayment);
loans.get("/:loanAmount", getAvailableLoans);
loans.put("/:userId/:lenderId", userRequestsLoan);

module.exports = loans;
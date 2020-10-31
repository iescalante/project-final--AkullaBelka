const rates = require("express").Router();
const postNewRate = require("./postNewRate");
const getAllRates = require("./getAllRates");
const filterByScoreAndLoan = require("./filterByScoreAndLoan");

rates.post("/", postNewRate);
rates.get("/", getAllRates);
rates.get("/:score/:loanAmount", filterByScoreAndLoan);

module.exports = rates;
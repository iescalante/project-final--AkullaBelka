const routes = require("express").Router();
const users = require("./users");
const loans = require("./loans");
const transactions = require("./transactions");
const rates = require("./rates");
require("dotenv").config();
// const companies = require("./companies");
// const cart = require("./cart");

routes.get("/", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Connected! Welcome to the BE of AkullaBelka",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});
routes.use("/users", users);
routes.use("/loans", loans);
routes.use("/transactions", transactions);
routes.use("/rates", rates);

module.exports = routes;
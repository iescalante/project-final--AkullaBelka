"use strict"
const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");
require("dotenv").config();
const { latePaymentScheduler } = require('./cronHandler');

const PORT = 4000;
// latePaymentScheduler();
express()
  .use(function (req,res,next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false}))
  .use("/", express.static(__dirname + "/"))
  .use("/", routes)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

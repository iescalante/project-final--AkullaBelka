"use strict"
const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

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

  .get("/", (req, res) => res.status(200).json("it's working BE") )

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
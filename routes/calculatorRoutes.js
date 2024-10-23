const express = require("express");
const calculatorRouter = express.Router();
const calculatorController = require("../controllers/calculatorController");

// http://localhost:3000/calculator/add
calculatorRouter.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

// http://localhost:3000/calculator/subtract
calculatorRouter.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

// http://localhost:3000/calculator/multiply
calculatorRouter.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

// http://localhost:3000/calculator/divide
calculatorRouter.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = calculatorRouter;

var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller.js");


router.get("/productFromDb",ProductController.GetProductFromDb);

module.exports = router;
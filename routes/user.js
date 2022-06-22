const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll } = require("../controllers/user");

// routes
router.get("/getAll", getAll);

module.exports = router;

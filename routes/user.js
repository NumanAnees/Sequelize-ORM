const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll, getById } = require("../controllers/user");

// routes
router.get("/getAll", getAll);
router.post("/getById", getById);

module.exports = router;

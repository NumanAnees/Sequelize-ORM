const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll, newUser } = require("../controllers/user");

// routes
router.get("/getAll", getAll);
router.post("/newUser", newUser);

module.exports = router;

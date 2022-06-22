const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll, getById, getOne } = require("../controllers/user");

// routes
router.get("/getAll", getAll);
router.post("/getById", getById);
router.post("/getOne", getOne);

module.exports = router;

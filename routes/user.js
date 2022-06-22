const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll, getById, getOne, getTasks } = require("../controllers/user");

// routes
router.get("/getAll", getAll);
router.post("/getById", getById);
router.post("/getOne", getOne);

//many to one
router.post("/getTasks", getTasks);

module.exports = router;

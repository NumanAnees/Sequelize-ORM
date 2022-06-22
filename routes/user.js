const express = require("express");
const router = express.Router();

// import middlewares
// import controllers
const { getAll, deleteById, allDeletedUsers } = require("../controllers/user");

// routes
router.get("/getAll", getAll);
router.post("/deleteById", deleteById);
router.get("/allDeletedUsers", allDeletedUsers);

module.exports = router;

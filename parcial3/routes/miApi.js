const express = require("express");
const router = express.Router();

const { miApi } = require("../Controllers/miApi");

router.get("/", miApi);

module.exports = router;

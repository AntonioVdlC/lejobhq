const express = require("express");
const router = express.Router();

router.get("/", require("./get"));

module.exports = router;

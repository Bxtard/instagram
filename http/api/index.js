
const express = require("express");
const users = require("../users/routes");
const router = express.Router();

router.get("/",(req, res) => {
    res.json("hello from api");
});

router.use("/users",users);

module.exports = router;
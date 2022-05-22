"use strict";
const users = require("./model");

const list = (req, res) => {
    res.json({data: users});
};

module.exports = {list};

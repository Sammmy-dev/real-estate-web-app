const express = require("express");
const { test } = require("../controllers/user.controller");
const { signup } = require("../controllers/auth.controller");

const authRouter=express.Router();

authRouter.post("/signup", signup)

module.exports = authRouter;



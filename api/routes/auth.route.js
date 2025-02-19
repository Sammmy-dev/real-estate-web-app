const express = require("express");
const { test } = require("../controllers/user.controller");
const { signup, signin } = require("../controllers/auth.controller");

const authRouter=express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
module.exports = authRouter;



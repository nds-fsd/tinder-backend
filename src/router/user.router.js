const express = require("express");
const {UserController} = require("../controlers");
const UserRouter = express.Router()
UserRouter.get("/", UserController.findAll);
UserRouter.post("/", UserController.create);

module.exports = {UserRouter};
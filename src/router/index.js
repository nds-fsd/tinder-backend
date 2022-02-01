const express = require('express');
const {UserRouter} = require("./user.router");



const AppRouter = express.Router()

AppRouter.use("/user",UserRouter);

module.exports = {AppRouter};


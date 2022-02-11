const {Router} = require('express');
const appRouter = Router();
const {userRouter} = require("./user");
const {likeRouter} = require('./likes');

appRouter.use("/likes", likeRouter);
appRouter.use("/users", userRouter);


module.exports = appRouter;


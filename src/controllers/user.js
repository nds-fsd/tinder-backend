const {Router} = require('express');
const {User} = require('../models');
const userRouter = Router();


// obtenemos todos los users

userRouter.get('/all', async (req, res) => {
    User.find((error, success) => {
        if(error) {
            res.status(500).json({error: "No se puedo conectar con la base de datos"});
        } else {
            res.json(success);
        }
    })
});







exports.userRouter = userRouter;
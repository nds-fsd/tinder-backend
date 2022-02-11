const {Router} = require('express');
const {Like} = require('../models');
const likeRouter = Router();


// obtenemos todos los likes 

likeRouter.get('/all', async (req, res) => {
    Like.find((error, success) => {
        if(error) {
            res.status(500).json({error: "No se puedo conectar con la base de datos"});
        } else {
            res.json(success);
        }
    })
});







exports.likeRouter = likeRouter;





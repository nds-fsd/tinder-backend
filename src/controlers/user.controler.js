const {User} =require("../mongo")

const findAll = (req, res) => {

    const handleSuccess = (users) => {
        res.status(200).json(users);
    };
    const handleError = error => {
        res.status(500).json(error);
    }
    User.find().then(handleSuccess).catch(handleError);
};

const create = (req, res) => {
    
const body = req.body

if (!body.email){
    return  res.status(400).json("email not recieved");
}
const handleSuccess = (user) => {
    res.status(201).json(user);
};
const handleError = (error) => {
    res.status(500).json(error);
}
User.create(body).then(handleSuccess).catch(handleError)
};

module.exports ={
    findAll,
    create
}
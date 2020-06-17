const router = require("express").Router();

const Users = require("./usersModel.js");
const restrictedLoggedIn = require("../auth/restrictedMiddleware");
router.get("/", restrictedLoggedIn, (req, res) => {
    Users.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => res.send(err));
});

module.exports = router;

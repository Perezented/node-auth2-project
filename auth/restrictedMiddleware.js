const jwt = require("jsonwebtoken");
const consts = require("../config/consts");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, consts.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).josn({
                    Error:
                        "The toen i snot valid. Please provide the correct token information in the headers.",
                });
            } else {
                res.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({
            Error: "Please provide credentials to access this resource.",
        });
    }
};

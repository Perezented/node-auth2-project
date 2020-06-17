module.exports = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({
            Error:
                "Error, you'll need to be logged in to access this information.",
        });
    }
};

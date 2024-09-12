// Middleware for handling auth

const { User } = require("../models/index");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;    
    const password = req.headers.password;
    
    const result = await User.findOne({
        username: username,
        password: password
    });

    if (result) {
        next();
    } else {
        res.status(403).json({
            msg: "User doesn't exists."
        });
    }
}

module.exports = userMiddleware;
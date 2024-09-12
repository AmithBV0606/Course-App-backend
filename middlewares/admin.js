// Middleware for handling auth

const { Admin } = require("../models/index");

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;    
    const password = req.headers.password;
    
    const result = await Admin.findOne({
        username: username,
        password: password
    });

    if (result) {
        next();
    } else {
        res.status(403).json({
            msg: "Admin doesn't exists."
        });
    }
}

module.exports = adminMiddleware;
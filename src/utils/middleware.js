const fetch = require("node-fetch");                          
module.exports = {
    isAuth: (req, res, next) => {
        if (req.headers.authorization) {
            fetch("http://localhost:3000/ping", { 
                headers: {
                    "Authorization": req.headers.authorization
                }
            })
            .then((res) => res.json())
            .then((json) => {
                if (json.logged)
                    next();
                else
                    return res.status(401).send({ success: false, message: "Not logged." });
            });
        } else
            return res.status(401).send({ success: false });
    }
}
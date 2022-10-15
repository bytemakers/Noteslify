var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = "isadvn2hjk23h4h&%@(jhhj";

const fetchuser = async (req, res, next) => {
    const token = await req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate using a valid token" });
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}


module.exports = fetchuser;
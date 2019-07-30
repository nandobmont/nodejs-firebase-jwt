const { firebase } = require("../config");

const verifyJWT = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  try {
    const { uid } = await firebase.auth().verifyIdToken(token);
    req.userId = uid;
    next();
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
};

module.exports = verifyJWT;

const jwt = require("jsonwebtoken");

const SIGNING_KEY = "mysecretkey";

function generateJWT(payload) {
  return jwt.sign(payload, SIGNING_KEY, { expiresIn: "1d" });
}

 
function sanitizeUser(user) {
  const { password: dbPassword, ...sanitizedUser } = JSON.parse(
    JSON.stringify(user)
  );
  return sanitizedUser;
}

module.exports = {
  SIGNING_KEY,
  generateJWT,
  sanitizeUser,
};
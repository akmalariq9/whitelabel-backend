const jwt = require("jsonwebtoken");
jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({
      status: "error",
      message: "You must be logged in to access this resource",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    req.username = decoded.username;
    req.role = decoded.role;
  
    console.log("Token valid, user authenticated");
    next();
  } catch (err) {
    console.log("Invalid token:", err.message); // Log detailed error message
    return res.status(401).json({ status: "error", message: "Invalid token" });
  }
};  

const jwt = require('jsonwebtoken');
jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: 'error', message: 'You must be logged in to access this resource' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ status: 'error', message: 'Invalid token' });
  }
};

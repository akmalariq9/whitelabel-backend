module.exports = (req, res, next) => {
    if (req.session.userId) {
      return next();
    } else {
      return res.status(401).json({ status: 'error', message: 'You must be logged in to access this resource' });
    }
  };
  
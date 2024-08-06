const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await authService.login(username, password);

  if (result.status === 'success') {
    req.session.userId = result.userId;
    res.status(200).json({ status: 'success', message: 'Login successful' });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to logout' });
    }
    res.status(200).json({ status: 'success', message: 'Logout successful' });
  });
};

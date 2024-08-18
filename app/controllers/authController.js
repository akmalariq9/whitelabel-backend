const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await authService.login(username, password);

  if (result.status === 'success') {
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: false, 
      maxAge: 3600000 
    });

    res.status(200).json({
      error: false,
      message: 'Login successful',
      loginResult: {
        username: username,
        token: result.token
      }
    });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
};

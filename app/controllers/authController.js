const authService = require('../services/authService');
const { isUUID } = require('validator');

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

exports.register = async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  };

  authService.register(data)
    .then(result => res.status(201).json({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: result,
    }))
    .catch(error => res.status(500).json({
      status: 'error',
      message: error.message,
    }));
};

exports.getAllUser = async (req, res) => {
  authService.getAllUser()
    .then(user => {
      res.status(200).json({
        status: 'success',
        message: 'User berhasil didapatkan',
        data: user
      });
    })
    .catch(error => {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    });
};

exports.getUserById = async (req, res) => {
  authService.getUserById(req.params.id)
    .then(user => {
      res.status(200).json({
        status: 'success',
        message: 'User berhasil didapatkan',
        data: user
      });
    })
    .catch(error => {
      if (error.message === 'User not found') {
        res.status(404).json({
          status: 'error',
          message: error.message
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'Terjadi kesalahan pada server'
        });
      }
    });
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;

  if(!isUUID(userId)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID'
    });
  }

  try {
    const userData = await authService.updateUser(req.body, userId);

    if (!userData) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    const data = {
      id: userData.id,
      username: userData.username,
      role: userData.role
    };

    const updatedUser = await authService.updateUser(data, userId);
    res.status(200).json({
      status: 'success',
      message: 'User berhasil diupdate',
      data: updatedUser
    });
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({
        status: 'error',
        message: error.message
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan pada server'
      });
    }
  }
};

exports.deleteUser = async (req, res) => {
  authService.deleteUser(req.params.id)
    .then(user => {
      res.status(200).json({
        status: 'success',
        message: 'User berhasil dihapus',
        data: user
      });
    })
    .catch(error => {
      if (error.message === 'User not found') {
        res.status(404).json({
          status: 'error',
          message: error.message
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'Terjadi kesalahan pada server'
        });
      }
    });
};
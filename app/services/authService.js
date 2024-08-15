const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

exports.login = async (username, password) => {
  const user = await userRepository.findUserByUsernameAndPassword(username, password);
  if (user) {
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    return { status: 'success', userId: user.id, token };
  } else {
    return { status: 'error', message: 'Invalid credentials' };
  }
};

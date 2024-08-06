const userRepository = require('../repositories/userRepository');

exports.login = async (username, password) => {
  const user = await userRepository.findUserByUsernameAndPassword(username, password);
  if (user) {
    return { status: 'success', userId: user.id };
  } else {
    return { status: 'error', message: 'Invalid credentials' };
  }
};

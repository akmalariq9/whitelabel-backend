const { user } = require('../../models');

exports.findUserByUsernameAndPassword = async (username, password) => {
  return await user.findOne({ where: { username, password } });
};

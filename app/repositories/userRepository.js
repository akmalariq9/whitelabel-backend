const { user } = require('../../models');

exports.findUserByUsernameAndPassword = async (username, password) => {
  return await user.findOne({ where: { username, password } });
};

exports.createUser = async (data) => {
  return await user.create(data);
};

exports.getAllUser = async () => {
  return await user.findAll();
};

exports.getUserById = async (id) => {
  const userData = await user.findByPk(id);
  
  if (!userData) {
    return null;
  }

  return userData;
};

exports.updateUser = async (data, id) => {
  const userData = await user.findByPk(id);

  if (!userData) {
    return null;
  }

  await user.update(data, { where: { id } });
  return await user.findByPk(id);
};

exports.deleteUser = async (id) => {
  const userData = await user.findByPk(id);

  if (!userData) {
    throw new Error('User not found');
  }

  await user.destroy({ where: { id } });
  return userData;
};

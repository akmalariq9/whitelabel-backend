const userRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

exports.login = async (username, password) => {
  const user = await userRepository.findUserByUsernameAndPassword(
    username,
    password,
  );

  if (user) {
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      jwtSecret,
      { expiresIn: "24h" }
    );
    return {
      status: "success",
      userId: user.id,
      username: user.username,
      role: user.role,
      token,
    };
  } else {
    return { status: "error", message: "Invalid credentials" };
  }
};

exports.register = async (data) => {
  try {
    const user = await userRepository.createUser(data);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.getAllUser = async () => {
  try {
    const user = await userRepository.getAllUser();
    return user;
  } catch (error) {
    throw error;
  }
};

exports.getUserById = async (id) => {
  const userData = await userRepository.getUserById(id);

  if (!userData) {
    throw new Error("User not found");
  }

  return userData;
};

exports.updateUser = async (data, id) => {
  try {
    const userData = await userRepository.updateUser(data, id);

    if (!userData) {
      throw new Error("User not found");
    }
    return userData;
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await userRepository.deleteUser(id);
    return user;
  } catch (error) {
    throw error;
  }
};

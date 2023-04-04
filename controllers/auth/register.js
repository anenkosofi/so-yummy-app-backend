const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const body = req.body;
  const { name, email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with this email: ${email} already exists`);
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({ name, email, password: hashPassword });

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

module.exports = register;

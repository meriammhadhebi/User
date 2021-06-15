const mongoose = require("mongoose");
const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  const { Nom, Prenom, Email, Tel, Role } = req.body;
  salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.Password, salt);
  const User = { Nom, Prenom, Email, Tel, Password: hashedPassword, Role };
  const newUser = new UserModel(User);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
const Login = async (req, res, next) => {
  const { Email, Password } = req.body;
  const user = await UserModel.findOne({ Email });
  if (!user) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'User doesnt exist' }] });
  }
  try {

      const isMatch = await bcrypt.compare(Password, user.Password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Not Allowed' }] });
      }
      else{
        return res.json(user);}
  } catch {
    return res.json(500).send();
  }
};

module.exports = {
  createUser,
  Login,
};

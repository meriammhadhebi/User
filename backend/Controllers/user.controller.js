const mongoose = require('mongoose');
const UserModel = require('../Models/user.model');

const createUser = async (req, res, next) => {
    const {  Nom, Prenom, Email , Tel ,Password, Role} = req.body;
    const User = {  Nom, Prenom, Email , Tel,Password, Role };
    const newUser = new UserModel(User);
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };
const Login = async (req, res,next) => {
    try {
      const user = await UserModel.findOne({Email:req.body.Email})
      return res.json(user);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    createUser,
    Login
    }
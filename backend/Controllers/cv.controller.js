const mongoose = require('mongoose');
const CVModel = require('../Models/cv.model');
const UserModel = require("../Models/user.model");

const getCVs = async (req, res, next) => {
  try {
    const doc = await CVModel.find();

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
const getCV = async (req, res, next) => {
  try {
    const doc = await CVModel.findById(req.params.id);

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
const getCVByUser = async (req, res, next) => {
    try {
      
      const doc = await CVModel.find({idUser: req.params.idUser});
  
      res.status(200).json(doc);
    } catch (error) {
      next(error);
    }
    };
const createCV = async (req, res, next) => {
  const CV = req.body;
  const newCV = new CVModel(CV);
  try {
    await newCV.save();
    res.status(201).json(newCV);
  } catch (error) {
    next(error);
  }
};

const DeleteCV = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No CV Found with id : ${id} ');
  await CVModel.findByIdAndRemove(id);
  res.json({ message: 'deleted successfully.' });
};
const updateCV = async (req, res) => {
  const { id } = req.params;
  const {  Nom, Prenom, Email, Tel,nomFormation,dateDebut,dateFin,Ecole  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No CV Found ! ');

  const doc = await CVModel.findById(req.params.id);
  const updatedInfos = { Nom, Prenom, Email, Tel, _id: doc.idUser };

  await Promise.all([
    CVModel.findByIdAndUpdate(id, {$set:{"formation.$.nom":nomFormation,"formation.$.Ecole":Ecole}}),
    UserModel.findByIdAndUpdate(doc.idUser, updatedInfos, { new: true }),
  ]);
  res.json(updatedInfos);
};


module.exports = {
  getCVs,
  getCV,
  getCVByUser,
  createCV,
  DeleteCV,
  updateCV
};

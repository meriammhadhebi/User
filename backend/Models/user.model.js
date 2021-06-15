const mongoose = require('mongoose');

const roles = ['particulier', 'entreprise'];
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    Nom: {
      type: String,
    },
    Prenom: {
        type: String,
    },
    Email: {
        type: String,
    },
    Tel: {
      type: Number,
    },
    Password: {
        type: String,
    },
    Role: {
        type: String,
        enum: roles,
        default: 'particulier',
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);

module.exports = User;

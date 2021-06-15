const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const cvSchema = mongoose.Schema(
  {
    idUser:{ type: Schema.Types.ObjectId, ref: 'User', required: false },
    formation: [
        {
          nom: { type: String},
          dateDebut :{type: Date},
          dateFin :{type: Date},
          Ecole :{type: String},
        }
  
      ],
  },
  {
    timestamps: true,
  }
);
const CV = mongoose.model('CV', cvSchema);

module.exports = CV;

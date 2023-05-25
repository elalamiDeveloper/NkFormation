import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  nomDeSociete: {
    type: String,
    required: [true, 'A society must have a name'],
    trim: true,
  },

  nbrSalariee: {
    type: Number,
    default: 0,
  },

  siret: {
    type: String,
    required: [true, 'A society must have a siret'],
    unique: true,
    trim: true,
  },

  dateDeNaissance: {
    type: Date,
    default: 0,
  },

  adress: {
    type: String,
    trim: true,
    default: '',
  },

  numeroSecurity: {
    type: String,
    trim: true,
    default: '',
  },

  opco: {
    type: String,
    required: [true, 'A society must have an OPCO number'],
    trim: true,
  },

  numeroAdherent: {
    type: String,
    trim: true,
    default: '',
  },

  idcc: {
    type: String,
    required: [true, 'A society must have an IDCC number'],
    trim: true,
  },

  idOpco: {
    type: String,
    trim: true,
    default: '',
  },

  budget: {
    type: String,
    trim: true,
    default: '',
  },

  mdpOpco: {
    type: String,
    trim: '',
    default: '',
  },

  telPro: {
    type: String,
    trim: '',
    default: '',
  },

  mailIntern: {
    type: Boolean,
    default: false,
  },

  nomDerigeant: {
    type: String,
    trim: '',
    default: '',
  },

  idFormation: {
    type: String,
    trim: '',
    default: '',
  },

  prenomDerigeant: {
    type: String,
    trim: '',
    default: '',
  },

  mdpFormation: {
    type: String,
    trim: '',
    default: '',
  },

  mail: {
    type: String,
    trim: '',
    default: '',
  },

  telPerso: {
    type: String,
    trim: '',
    default: '',
  },

  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;

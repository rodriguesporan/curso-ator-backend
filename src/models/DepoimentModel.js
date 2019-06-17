const mongoose = require('mongoose');

const DepoimentSchema = new mongoose.Schema({
  'actor': String,
  'depoiment': String,
  'image': String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Depoiment', DepoimentSchema);

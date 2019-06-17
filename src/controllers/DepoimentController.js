const mongoose = require('mongoose');
const Depoiment = require('../models/DepoimentModel');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0-rblgj.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, }
);

module.exports = {
  list: async (req, res) => {
    var result = await Depoiment.find({});
    res.json(result);
  },
  create: (req, res) => {
    res.json(req.body);
  },
  show: (req, res) => {
    res.send(`Depoiment ${req.params.id}`);
  },
};

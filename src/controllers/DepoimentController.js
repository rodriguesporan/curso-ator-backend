const Depoiment = require('../models/DepoimentModel');

module.exports = {
  list: async (req, res) => {
    const depoiments = await Depoiment.find({});
    res.json(depoiments);
  },
  create: async (req, res) => {
    const { actor, depoiment } = req.body;
    const { filename: image } = req.file;
    const dep = await Depoiment.create({ actor, depoiment, image });
    res.json(dep);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const depoiment = await Depoiment.findById(id);
    res.json(depoiment);
  },
};

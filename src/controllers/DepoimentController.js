const Depoiment = require('../models/DepoimentModel');

module.exports = {
  list: async (req, res) => {
    const depoiments = await Depoiment.find({}).sort('-createdAt');
    res.json(depoiments);
  },
  create: async (req, res) => {
    const { actor, depoiment } = req.body;
    const { key: image, location: url = `http://localhost:${process.env.PORT}/files/${image}` } = req.file;
    const dep = await Depoiment.create({
      actor,
      depoiment,
      image,
      url,
    });
    res.json(dep);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const depoiment = await Depoiment.findById(id);
    res.json(depoiment);
  },
};

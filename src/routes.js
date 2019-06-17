const express = require('express');

const router = express.Router();
const DepoimentController = require('./controllers/DepoimentController');

router.get('/depoiments', DepoimentController.list);

router.post('/depoiments', DepoimentController.create);

router.get('/depoiments/:id', DepoimentController.show);

module.exports = router;

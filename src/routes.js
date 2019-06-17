const express = require('express');
const multer = require('multer');
const DepoimentController = require('./controllers/DepoimentController');
const uploadConfig = require('./configs/upload');

const router = express.Router();
const upload = multer(uploadConfig);
router.get('/depoiments', DepoimentController.list);
router.post('/depoiments', upload.single('image'), DepoimentController.create);
router.get('/depoiments/:id', DepoimentController.show);
module.exports = router;

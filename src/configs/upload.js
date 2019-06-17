const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: async function (req, file, cb) {
      const ext = await file.originalname.split('.').pop();
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`)
    }
  }),
};

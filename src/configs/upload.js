const multer = require('multer');
const path = require('path');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    async filename(req, file, cb) {
      const ext = await file.originalname.split('.').pop();
      // eslint-disable-next-line no-param-reassign
      file.key = `${file.fieldname}-${Date.now()}.${ext}`;
      cb(null, file.key);
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'curso-ator-assets',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: async (req, file, cb) => {
      const ext = await file.originalname.split('.').pop();
      const fileName = `${file.fieldname}-${Date.now()}.${ext}`;
      cb(null, fileName);
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
};

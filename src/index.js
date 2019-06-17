require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const routes = require('./routes');

const app = express();
app.use(morgan('tiny'));
app.use(upload.single('image'));
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

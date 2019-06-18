require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, }
);
const app = express();
app.use(morgan('tiny'));
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0-rblgj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, }
);
const app = express();
app.use(morgan('tiny'));
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

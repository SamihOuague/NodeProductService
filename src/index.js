const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products/Router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(products);

app.listen(8080);
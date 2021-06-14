const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: String,
  describ: String,
  price: Number,
  img: String
});

Schema.pre('save', function (next) {
  
});

module.exports = mongoose.model('Product', Schema);

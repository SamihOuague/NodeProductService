const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  	title: {
		type: String,
		required: true,
		unique: true
	},
  	price: {
		type: String,
		required: true,
	},
	categoryTag: {
		type: String,
		required: true,
	},
	weight: {
		type: String,
		required: true,
	},
	describ: String,
  	img: String,
});

const SubCategorySchema = new mongoose.Schema({
	name: {
	  	type: String,
	  	required: true,
  	}
});

const Schema = new mongoose.Schema({
  	category: {
		type: String,
		required: true,
	},
  	subcategory: [SubCategorySchema],
});

//Schema.pre('save', function (next) {
//  
//});

module.exports = { 
	CategoriesModel: mongoose.model('Categorie', Schema),
	ProductModel: mongoose.model('Product', ProductSchema)
};
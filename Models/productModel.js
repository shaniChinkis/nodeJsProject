var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'productName' : String,
	'categoryId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'category'
	},
	'price' : Number,
	'description' : String,
	'imageName' : String
});

module.exports = mongoose.model('product', productSchema);

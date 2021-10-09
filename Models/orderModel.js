var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'orderDate' : Date,
	'orderSum' : Number,
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'productList': [{
		type: Schema.Types.ObjectId,
		ref: 'product'}]
});

module.exports = mongoose.model('order', orderSchema);

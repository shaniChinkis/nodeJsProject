var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderItemSchema = new Schema({
	'productId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'product'
	},
	'orderId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'order'
	},
	'quantity' : Number
});

module.exports = mongoose.model('orderItem', orderItemSchema);

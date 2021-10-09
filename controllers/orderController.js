var OrderModel = require('../Models/orderModel');

/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */
module.exports = {


    /**
     * orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        OrderModel.findOne({_id: id}).populate("productList").exec( function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }

            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }

            return res.json(order);
        });
    },

    /**
     * orderController.create()
     */
    create: function (req, res) {
        var order = new OrderModel({
			orderDate : req.body.orderDate,
			orderSum : req.body.orderSum,
            userId : req.body.userId,
            productList: req.body.productList
        });
debugger;
        order.save(function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating order',
                    error: err
                });
            }

            return res.status(201).json(order);
        });
    }
};

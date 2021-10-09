var ProductModel = require('../Models/productModel');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

    /**
     * productController.list()
     */
    list: function (req, res) {
        ProductModel.find(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }

            return res.json(products);
        });
    },

 /**
     * productController.create()
     */
    create: function (req, res) {
        var product = new ProductModel({
			productName : req.body.productName,
			categoryId : req.body.categoryId,
			price : req.body.price,
			description : req.body.description,
			imageName : req.body.imageName
        });

        product.save(function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating product',
                    error: err
                });
            }

            return res.status(201).json(product);
        });
    },
    /**
     * productController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductModel.find({categoryId: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }

            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            return res.json(product);
        });
    }
};

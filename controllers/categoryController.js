var CategoryModel = require('../Models/categoryModel');

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
module.exports = {

    /**
     * categoryController.list()
     */
    list: function (req, res) {
        CategoryModel.find(function (err, categorys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting category.',
                    error: err
                });
            }

            return res.json(categorys);
        });
    },

    
    /**
     * categoryController.create()
     */
    create: function (req, res) {
        var category = new CategoryModel({
			categoryName : req.body.categoryName
        });
// var category=new CategoryModel(req.body);
        category.save(function (err, category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating category',
                    error: err
                });
            }

            return res.status(201).json(category);
        });
    }
};

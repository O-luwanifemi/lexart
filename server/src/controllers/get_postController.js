import response from '../helpers/response.js';
import { Product } from '../models/product.js';

const get_postController = {
    // Gets products from the DB
    getProducts: async (req, res) => {
        try {
            const currentProducts = await Product.find();
            
            if (!Object.keys(currentProducts).length) {
                return response(res, 404, 'Success', 'Nothing found');
            }

            let [ payload ] = currentProducts;

            return response(res, 200, 'Success', 'Success', payload);
        } catch (error) {
            response(res, 500, 'Failed', error.message);
        }
    },

    // Stores user's search results to the DB
    addProducts: async (req, res) => {
        // Request body contains no property
        if (!Object.keys(req.body).length) {
            return response(res, 400, 'Failed', 'Nothing to save');
        }

        try {
            const currentProducts = await Product.find();

            // There is nothing saved to the DB
            if (!Object.keys(currentProducts).length) {
                const newProducts = new Product({ products: req.body });
                const feedback = await newProducts.save();
                return response(res, 200, 'Success', 'Posts saved!', feedback);
            }

            // Get products prop (Array) and id from array of collection Object
            let [ { products, _id } ] = currentProducts;

            // Merge incoming products array with existing, and update
            const newProducts = await Product.findOneAndUpdate(
                { _id },
                { products: [ ...products.concat(req.body) ] },
                { new: true }
            );
            
            return response(res, 200, 'Success', 'Posts saved!', newProducts);
        } catch (error) {
            response(res, 500, 'Failed', error.message); 
        }
    }
};

export default get_postController;
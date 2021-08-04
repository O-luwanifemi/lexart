import axios from 'axios';
import jsdom from 'jsdom';
import dotenv from 'dotenv';
import { Product } from '../models/product.js';
import createTvInstance from '../helpers/buscapeHelpers/createTvInstance.js';
import createPhoneInstance from '../helpers/buscapeHelpers/createPhoneInstance.js';
import createRefrigeratorInstance from '../helpers/buscapeHelpers/createRefrigeratorInstance.js';
import response from '../helpers/response.js';

dotenv.config();
const { JSDOM } = jsdom;

const buscapeController = {
    getPhones: async (req, res) => {
        const url = 'https://www.buscape.com.br/celular/smartphone';

        try {
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'div#resultArea .card--prod'
            );

            // console.log(list.length);


            for (let element of list) {
                const productInstance = await createPhoneInstance(
                    res,
                    element,
                    document
                );

                const newProduct = new Product(productInstance);

                ///////////////// MIGHT HAVE TO DELETE MANY BEFORE SAVING NEW DATA ///////////////////////////
                await newProduct.save();
            }

            const phones = await Product.find({ category: 'mobile' });

            if (!phones.length) { 
                return response(res, 400, 'Failed', 'Nothing found');
            }

            return response(res, 200, 'Success', 'Successful', phones);
        } catch (error) {
            console.log(error);
            return response(res, 500, 'Failed', error.message);
        }
    },

    getTelevisions: async (req, res) => {
        const url = 'https://www.buscape.com.br/tv';

        try {
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'div.card--prod'
            );
            
            for (let element of list) {
                const productInstance = await createTvInstance(
                    res,
                    element
                );

                const newProduct = new Product(productInstance);

                ///////////////// MIGHT HAVE TO DELETE MANY BEFORE SAVING NEW DATA ///////////////////////////
                await newProduct.save();
            }

            const televisions = await Product.find({ category: 'television' });

            if (!televisions.length) {
                return response(res, 400, 'Failed', 'Nothing found');
            }

            return response(res, 200, 'Success', 'Successful', televisions);
        } catch (error) {
            return response(res, 500, 'Failed', error.message);
        }
    },

    getRefrigerators: async (req, res) => {
        const url = 'https://www.buscape.com.br/search?q=refrigerator';

        try {
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll('#resultArea div.card--offer');

            for (let element of list) {
                const productInstance = await createRefrigeratorInstance(
                    res,
                    element
                );

                const newProduct = new Product(productInstance);

                await newProduct.save();
            }

            const refrigerators = await Product.find({
                category: 'refrigerator'
            });

            if (!refrigerators.length) {
                return response(res, 400, 'Failed', 'Nothing found');
            }

            return response(res, 200, 'Success', 'Successful', refrigerators);
        } catch (error) {
            return response(res, 500, 'Failed', error.message);
        }
    }
};

export default buscapeController;

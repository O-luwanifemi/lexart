import axios from 'axios';
import jsdom from 'jsdom';
import dotenv from 'dotenv';
import createTvInstance from '../helpers/mercadoHelpers/createTvInstance.js';
import createPhoneInstance from '../helpers/mercadoHelpers/createPhoneInstance.js';
import createRefrigeratorInstance from '../helpers/mercadoHelpers/createRefrigeratorInstance.js';
import response from '../helpers/response.js';

dotenv.config();
const { JSDOM } = jsdom;

const mercadoController = {
    getPhones: async (req, res) => {
        const url = 'https://celulares.mercadolivre.com.br/#menu=categories';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'li.ui-search-layout__item div.andes-card'
            );

            for (let element of list) {
                const productInstance = await createPhoneInstance(res, element);
                payload.push(productInstance);
            }

            return response(res, 200, 'Success', 'Successful', payload);
        } catch (error) {
            response(res, 500, 'Failed', error.message);
        }
    },

    getTelevisions: async (req, res) => {
        const url =
            'https://eletronicos.mercadolivre.com.br/televisores/#menu=categories';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'li.ui-search-layout__item div.andes-card'
            );

            for (let element of list) {
                const productInstance = await createTvInstance(res, element);
                payload.push(productInstance);
            }

            return response(res, 200, 'Success', 'Successful', payload);
        } catch (error) {
            response(res, 500, 'Failed', error.message);
        }
    },

    getRefrigerators: async (req, res) => {
        const url =
            'https://lista.mercadolivre.com.br/geladeiras-e-freezers/refrigerator_NoIndex_True#applied_filter_id%3Dcategory%26applied_filter_name%3DCategorias%26applied_filter_order%3D9%26applied_value_id%3DMLB181294%26applied_value_name%3DGeladeiras%26applied_value_order%3D6%26applied_value_results%3D20924%26is_custom%3Dfalse';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'li.ui-search-layout__item div.andes-card'
            );

            for (let element of list) {
                const productInstance = await createRefrigeratorInstance(
                    res,
                    element
                );
                
                payload.push(productInstance);
            }

            return response(res, 200, 'Success', 'Successful', payload);
        } catch (error) {
            response(res, 500, 'Failed', error.message);
        }
    }
};

export default mercadoController;
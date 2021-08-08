import axios from 'axios';
import jsdom from 'jsdom';
import dotenv from 'dotenv';
import response from '../helpers/response.js';
import createTvInstance from '../helpers/buscapeHelpers/createTvInstance.js';
import createPhoneInstance from '../helpers/buscapeHelpers/createPhoneInstance.js';
import createRefrigeratorInstance from '../helpers/buscapeHelpers/createRefrigeratorInstance.js';

dotenv.config();
const { JSDOM } = jsdom;

const buscapeController = {
    getPhones: async (req, res) => {
        const url = 'https://www.buscape.com.br/celular/smartphone';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                'div#resultArea .card--prod'
            );

            for (let element of list) {
                const productInstance = await createPhoneInstance(
                    res,
                    element,
                    document
                );

                payload.push(productInstance);
            }

            return response(res, 200, 'Success', 'Successful', payload);
        } catch (error) {
            return response(res, 500, 'Failed', error.message);
        }
    },

    getTelevisions: async (req, res) => {
        const url = 'https://www.buscape.com.br/tv';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll('div.card--prod');

            for (let element of list) {
                const productInstance = await createTvInstance(res, element);
                payload.push(productInstance);
            }

            return response(res, 200, 'Success', 'Successful', payload);
        } catch (error) {
            return response(res, 500, 'Failed', error.message);
        }
    },

    getRefrigerators: async (req, res) => {
        const url = 'https://www.buscape.com.br/search?q=refrigerator';

        try {
            const payload = [];
            const { data } = await axios.get(url);
            const dom = new JSDOM(data);
            const { document } = dom.window;
            const list = document.querySelectorAll(
                '#resultArea div.card--offer'
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
            return response(res, 500, 'Failed', error.message);
        }
    }
};

export default buscapeController;
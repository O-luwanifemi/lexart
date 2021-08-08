import axios from 'axios';
import { config } from '../config';

const { BASEURL } = config;

export const getMercado = async endpoint => {
    try {
        const response = await axios.get(`${BASEURL}/mercado/${endpoint}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
};

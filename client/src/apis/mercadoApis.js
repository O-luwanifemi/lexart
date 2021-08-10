import axios from 'axios';
import { config } from '../config';

const { BASEURL } = config;

export const getMercado = async endpoint => {
    try {
        const response = await axios.get(`${BASEURL}/mercado/${endpoint}`);

        if(response && Object.keys(response).length) {
            return response.data;
        }
        
        throw new Error();
    } catch (err) {
        alert(err.message);
        return err.message;
    }
};
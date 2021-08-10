import axios from 'axios';
import { config } from '../config';

const { BASEURL } = config;

export const getBuscape = async endpoint => {
    try {
        const response = await axios.get(`${BASEURL}/buscape/${endpoint}`);
        
        if (response && Object.keys(response).length) {
            return response.data;
        }

        throw new Error();
    } catch (err) {
        alert(err.message);
        return err.message;
    }
};

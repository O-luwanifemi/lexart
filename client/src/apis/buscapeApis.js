import axios from 'axios';
import { config } from '../config';

const { BASEURL } = config;

export const getBuscape = async endpoint => {
    try {
        const response = await axios.get(`${BASEURL}/buscape/${endpoint}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
};

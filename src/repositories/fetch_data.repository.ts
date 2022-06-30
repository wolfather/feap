import axios from 'axios'
import { ENDPOINT } from '../dictionary/endpoint.enum';

export const Fetch = (endpoint: ENDPOINT, params?: string) => {
    const initialConfig = {
        baseURL: 'http://localhost:3000',
        headers: {'header-test': 'test'},
    };

    const config = params !== undefined ? {...initialConfig, params} : initialConfig;

    const instance = axios.create(config);

    const fetch = instance.get(endpoint);

    return fetch;
};

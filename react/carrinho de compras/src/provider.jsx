import axios from 'axios';

const key = 'b7f9b04fc8824669be9e1951da62d9a0';

export const api = axios.create({
    baseURL: `https://crudcrud.com/api/${key}`,
    timeout: 10000,
});

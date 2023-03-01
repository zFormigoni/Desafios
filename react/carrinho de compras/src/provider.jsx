import axios from 'axios';

const key = 'a7b57968a73943939944756ede06d6f5';

export const api = axios.create({
    baseURL: `https://crudcrud.com/api/${key}`,
    timeout: 10000,
});

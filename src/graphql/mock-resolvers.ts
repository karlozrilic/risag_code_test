import jsonData from '../assets/products.json';

export const mocks = {
    Query: () => ({
        dataResponse: () => jsonData
    })
};
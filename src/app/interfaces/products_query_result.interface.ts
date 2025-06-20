import { Product } from "./product.interface";

export interface ProductsQueryResult {
    data: {
        dataResponse: {
            products: Product[];
            total: number;
            skip: number;
            limit: number;
        };
    },
    loading: boolean,
    networkStatus: number
}
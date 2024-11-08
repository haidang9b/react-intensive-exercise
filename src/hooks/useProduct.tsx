import { PRODUCTS_URL } from "../commons/apiUrl";
import httpClient from "../commons/httpClient"
import Product from "../types/Product";

export const useProducts = () => {
    async function getProductById(id: number){
        return await httpClient.get<Product>(`${PRODUCTS_URL}/${id}`);
    }

    return {getProductById}
}
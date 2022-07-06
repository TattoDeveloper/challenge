import { httpClient } from "@meli-challenge/core";
import { IProductRepository, SearchResultDTO } from "@meli-challenge/products/products-core";

const API_URL= process.env['NX_API'];
export class ProductRepository implements IProductRepository {

    search(query: string): Promise<SearchResultDTO> {
        console.log(`${API_URL}?q=${query}`)
        return httpClient({
            url: `${API_URL}?q=${query}`
        })
    }
    getById(id: string): Promise<any> {
        return httpClient({
            url: `${API_URL}/${id}`
        })
    }

}
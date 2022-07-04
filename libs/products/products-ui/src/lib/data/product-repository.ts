import { httpClient } from "@meli-challenge/core";
import { IProductRepository, SearchResultDTO } from "@meli-challenge/products/products-core";

export class ProductRepository implements IProductRepository {

    search(query: string): Promise<SearchResultDTO> {
        return httpClient({
            url: `http://localhost:3333/api/items?q=${query}`
        })
    }
    getById(id: string): Promise<any> {
        return httpClient({
            url: `http://localhost:3333/api/items/${id}`
        })
    }

}
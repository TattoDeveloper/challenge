import { httpClient, response } from "@meli-challenge/core";
import { IProductRepository, SearchResultDTO } from "@meli-challenge/products/products-core";
import { injectable } from "tsyringe";
import { SearchMapper } from "../mapper/search.mapper";

@injectable()
export class ProductRepository implements IProductRepository {

    @response<SearchResultDTO>( SearchMapper )
    async search(query: string): Promise<SearchResultDTO> {
        return httpClient({
            url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
        })
    }

    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
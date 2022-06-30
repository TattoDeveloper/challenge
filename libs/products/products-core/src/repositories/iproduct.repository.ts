import { BaseRepository } from "@meli-challenge/core";
import { SearchResultDTO } from "../dtos/search-result.dto";

export abstract class IProductRepository extends BaseRepository<any>{
    abstract search( query: string ): Promise<SearchResultDTO>
}
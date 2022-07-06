/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import 'reflect-metadata'
import { UseCaseBase } from "@meli-challenge/core";
import { IProductRepository, SearchResultDTO } from "@meli-challenge/products/products-core";
import { injectable, container } from "tsyringe";
import { productApiTypes } from "@meli-challenge/products/products-api"

@injectable()
export class SearchApiUseCase extends UseCaseBase<string, SearchResultDTO> {
    repository: IProductRepository

    constructor() {
        super();
        this.repository = container.resolve(productApiTypes.IProductRepository)
    }

    public async execute(params: string): Promise<SearchResultDTO> {
       
        if(params.match(/^\s+$|^$/gi)) {
            return {
                products: []
            }
        }

        return this.repository.search(params)
    }
}
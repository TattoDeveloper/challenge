/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UseCaseBase } from "@meli-challenge/core";
import { IProductRepository } from "@meli-challenge/products/products-core";
import { injectable, container } from "tsyringe";
import { productApiTypes } from "@meli-challenge/products/products-api"

@injectable()
export class SearchApiUseCase extends UseCaseBase<string, any> {
    repository: IProductRepository

    constructor() {
        super();
        console.log(productApiTypes.IProductRepository)
        this.repository = container.resolve(productApiTypes.IProductRepository)
    }

    public async execute(params: string) {

        if(!params) {
            throw Error('NO FOUND')
        }
       
        if(params.match(/^\s+$|^$/gi)) {
            return []
        }

        return this.repository.search(params)
    }
}
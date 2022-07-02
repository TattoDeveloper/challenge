/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UseCaseBase } from "@meli-challenge/core";
import { IProductRepository, Product } from "@meli-challenge/products/products-core";
import { injectable, container } from "tsyringe";
import { productApiTypes } from "@meli-challenge/products/products-api"

@injectable()
export class DetailApiUseCase extends UseCaseBase<string, Product> {
    repository: IProductRepository

    constructor() {
        super();
        console.log(productApiTypes.IProductRepository)
        this.repository = container.resolve(productApiTypes.IProductRepository)
    }

    public async execute(params: string) {
        return this.repository.getById(params)
    }
}
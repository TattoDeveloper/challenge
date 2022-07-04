/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UseCaseBase } from "@meli-challenge/core";
import { IProductRepository, Product } from "@meli-challenge/products/products-core";
import { injectable } from "tsyringe";
import { productUiTypes, uiContainer } from "../../../config/ui.container";

@injectable()
export class DetailUseCase extends UseCaseBase<string, Product> {
    repository: IProductRepository

    constructor() {
        super();
        this.repository = uiContainer.resolve(productUiTypes.IProductRepository)
    }

    public async execute(params: string) {
        return this.repository.getById(params)
    }
}
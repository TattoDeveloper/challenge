/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UseCaseBase } from "@meli-challenge/core";
import { IProductRepository } from "@meli-challenge/products/products-core";
import { injectable } from "tsyringe";

import { productUiTypes, uiContainer } from "../../../config/ui.container";

@injectable()
export class SearchUseCase extends UseCaseBase<string, any> {
    repository: IProductRepository

    constructor() {
        super();
        this.repository = uiContainer.resolve(productUiTypes.IProductRepository)
    }

    public async execute(params: string) {
        return this.repository.search(params)
    }
}
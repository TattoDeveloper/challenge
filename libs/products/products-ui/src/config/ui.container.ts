import { IProductRepository } from "@meli-challenge/products/products-core";
import { ProductRepository } from "../lib/data/product-repository";
import { container } from "tsyringe";

export const productUiTypes = {
    "IProductRepository": Symbol( 'IProductRepository' )
}

export const uiContainer = container.createChildContainer()
uiContainer.register<IProductRepository>(productUiTypes.IProductRepository, {useClass: ProductRepository});
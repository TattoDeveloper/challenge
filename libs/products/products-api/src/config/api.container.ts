/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { IProductRepository } from "@meli-challenge/products/products-core";
import { ProductRepository } from "../data/repositories/product.repository";
import { container } from "tsyringe";


export const productApiTypes = {
    "IProductRepository": Symbol( 'IProductRepository' )
}

container.register<IProductRepository>(productApiTypes.IProductRepository, {useClass: ProductRepository});


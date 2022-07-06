import { Product } from "../entities/product.entity";

export interface Author {
    name: string;
    lastname: string;
}

export interface SearchResultDTO{
    products: Product[];
    categories?: string[];
    author?: Author;
}
import { Product } from "../entities/product.entity";

interface Author {
    name: string;
    lastname: string;
}

export interface SearchResultDTO{
    products: Product[];
    categories?: string[];
    autor?: Author;
}
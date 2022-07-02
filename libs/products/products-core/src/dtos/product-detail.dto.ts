import { Product } from "../entities/product.entity";
import { Author } from "./search-result.dto";

export interface ProductDetailDTO extends Product {
    author?: Author
}
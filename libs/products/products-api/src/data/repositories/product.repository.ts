import { httpClient, response } from '@meli-challenge/core';
import { IProductRepository, ProductDetailDTO, SearchResultDTO } from '@meli-challenge/products/products-core';
import { injectable } from 'tsyringe';
import { ProductDetailMapper } from '../mapper/product-detail.mapper';
import { SearchMapper } from '../mapper/search.mapper';

@injectable()
export class ProductRepository implements IProductRepository {

    @response<SearchResultDTO>( SearchMapper )
    async search(query: string): Promise<SearchResultDTO> {
        return httpClient({
            url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
        })
    }

    @response<ProductDetailDTO>( ProductDetailMapper )
    async getById(id: string): Promise<ProductDetailDTO> {

        const response = await Promise.all([
                httpClient({
                    url: `https://api.mercadolibre.com/items/${id}`
                }),
                httpClient({
                    url: `https://api.mercadolibre.com/items/${id}/description`
                })
            ])
        return {...response[0], ...response[1]}
    }
}
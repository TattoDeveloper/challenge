import { httpClient, response } from '@meli-challenge/core';
import { IProductRepository, ProductDetailDTO, SearchResultDTO } from '@meli-challenge/products/products-core';
import { injectable } from 'tsyringe';
import { ProductDetailMapper } from '../mapper/product-detail.mapper';
import { SearchMapper } from '../mapper/search.mapper';

const API_URL = process.env.MELI_API_URL
@injectable()
export class ProductRepository implements IProductRepository {

    @response<SearchResultDTO>( SearchMapper )
    async search(query: string): Promise<SearchResultDTO> {
        return httpClient({
            url: `${API_URL}sites/MLA/search?q=${query}&limit=4`
        })
    }

    @response<ProductDetailDTO>( ProductDetailMapper )
    async getById(id: string): Promise<ProductDetailDTO> {

        const response = await Promise.all([
                httpClient({
                    url: `${API_URL}items/${id}`
                }),
                httpClient({
                    url: `${API_URL}/items/${id}/description`
                })
            ])
        const categoryResponse = await httpClient({
            url: `${API_URL}categories/${response[0].category_id}`
        })
        return {...response[0], ...response[1], category: categoryResponse}
    }
}
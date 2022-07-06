import { SearchResultDTO } from "@meli-challenge/products/products-core"
import { SearchApiUseCase } from "../search.use-case"
import 'reflect-metadata'
import { ProductRepository } from "../../../data/repositories/product.repository"
import { search } from '../../../mock-data/data'

describe('SearchApiUseCase', () => {
    it('When param is empty should return an empty array', async () => {
       const useCase: SearchApiUseCase = new SearchApiUseCase();
       
       const response: SearchResultDTO  = await useCase.execute('');

       expect(response.products.length).toBe(0);
    })

    it('When param is passed should return an products and categories', async () => {
        const useCase: SearchApiUseCase = new SearchApiUseCase();
        const mockSearch = jest.spyOn(ProductRepository.prototype, 'search').mockImplementation(
            () => Promise.resolve(search.response)
        )
        
        const response: SearchResultDTO  = await useCase.execute(search.query);
 
        expect(mockSearch).toHaveBeenCalledTimes(1);
        expect(mockSearch).toHaveBeenCalledWith(search.query);
        expect(response.products.length).toBe(1);
        expect(response.categories?.length).toBe(2);
        expect(response.author).toBeDefined();

        mockSearch.mockRestore();
     })
     
})
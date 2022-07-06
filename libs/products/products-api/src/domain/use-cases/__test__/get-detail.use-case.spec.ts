import { Product } from "@meli-challenge/products/products-core"
import 'reflect-metadata'
import { ProductRepository } from "../../../data/repositories/product.repository"
import { getById } from '../../../mock-data/data'
import { DetailApiUseCase } from "../get-detail.use-case"

describe('DetailApiUseCase', () => {

    it('When param is passed should return an products and categories', async () => {
        const useCase: DetailApiUseCase= new DetailApiUseCase();
        const mockProduct = jest.spyOn(ProductRepository.prototype, 'getById').mockImplementation(
            () => Promise.resolve(getById.response)
        )
        
        const response: Product  = await useCase.execute(getById.query);
 
        expect(mockProduct).toHaveBeenCalledTimes(1);
        expect(mockProduct).toHaveBeenCalledWith(getById.query);
        expect(response).toBe(getById.response)

        mockProduct.mockRestore();
     })
     
})
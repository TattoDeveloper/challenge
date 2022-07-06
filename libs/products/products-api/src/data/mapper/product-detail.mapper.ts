import { Mapper } from '@meli-challenge/core';
import { ProductDetailDTO } from '@meli-challenge/products/products-core';
import { DetailResponseDTO } from '../../dtos/detail-response.dto';



export class ProductDetailMapper extends Mapper<DetailResponseDTO, ProductDetailDTO > {
    protected createMap(params: DetailResponseDTO): ProductDetailDTO {
        const picture = params.pictures[0]
        return {
            id: params.id,
            title: params.title,
            price: {
              amount: params.price,
              currency: params.currency_id,
              decimals: 0
            },
            condition: params.condition,
            picture: picture.url,
            sold_quantity: params['sold_quantity'],
            free_shipping: params.shipping['free_shipping'],
            description: params.plain_text,
        } 
    }

}

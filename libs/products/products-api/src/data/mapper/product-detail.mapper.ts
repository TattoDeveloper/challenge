import { Mapper } from "@meli-challenge/core";
import { ProductDetailDTO } from "@meli-challenge/products/products-core";
import { DetailResponseDTO } from "../../dtos/detail-response.dto";
import { Result } from "../../dtos/search-response.dto";



export class ProductDetailMapper extends Mapper<DetailResponseDTO, ProductDetailDTO > {
    protected createMap(params: DetailResponseDTO): ProductDetailDTO {
        console.log(params)
        return {
            id: params.id,
            title: params.title,
            price: {
              amount: params.price,
              currency: params.currency_id,
              decimals: 0
            },
            condition: params.condition,
            picture: params.thumbnail,
            free_shipping: params.shipping.free_shipping,
            description: params.plain_text,
        } 
    }

}

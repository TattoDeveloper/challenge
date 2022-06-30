import { Mapper } from "@meli-challenge/core";
import { Product, SearchResultDTO } from "@meli-challenge/products/products-core";
import { Filters, FilterValues, Result, SearchResponseDTO} from "../../dtos/search-response.dto";

export class SearchMapper extends Mapper<SearchResponseDTO,SearchResultDTO>{
    
  private getCategories( filters: FilterValues[] ) {
      if(!filters || !filters.length) {
        return []
      }

      return filters[0].path_from_root?.map(( values: FilterValues ) => {
         return values.name
      })
  }


    protected createMap(params: SearchResponseDTO ): SearchResultDTO {
       
        return {
          products: params.results.map(( result: Result ) => {
             return {
                id: result.id,
                title: result.title,
                price: {
                  currency: result.currency_id,
                  amount: result.price,
                  decimals: 0
                },
                picture: result.thumbnail,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping
             } as unknown as Product
          }),
          categories: this.getCategories(params.filters[0]?.values) as string[]
        }
    }

}
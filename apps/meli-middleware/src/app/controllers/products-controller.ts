import { controller, get} from "../decorators/controllers/controller.decorator";
import { Request, Response } from "express";
// import { productApiTypes } from "@meli-challenge/config";
import { SearchApiUseCase, ProductRepository } from "@meli-challenge/products/products-api";

@controller('/items')
export class ProductController {   


   @get('/')
   public async search(req: Request, res: Response){
    console.log(ProductRepository)
     res.send(await new SearchApiUseCase().execute(req.query.q as string))
   }

   @get('/:id')
   public search2(req: Request, res: Response){
     console.log(this.search2)
     res.send({message: 'resssss'})
   }
}
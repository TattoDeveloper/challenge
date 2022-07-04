import { controller, get} from "../decorators/controllers/controller.decorator";
import { Request, Response } from "express";
// import { productApiTypes } from "@meli-challenge/config";
import { SearchApiUseCase, ProductRepository, DetailApiUseCase } from "@meli-challenge/products/products-api";

@controller('/items')
export class ProductController {   

   @get('/')
   public async search(req: Request, res: Response){
     res.json(await new SearchApiUseCase().execute(req.query.q as string))
   }

   @get('/:id')
   public async getDetail(req: Request, res: Response){
     res.json(await new DetailApiUseCase().execute(req.params.id))
   }
}
import React, { FC } from "react";
import { formatMoney } from "../../utils/util";
import styles from './product.module.scss';

export interface ProductListItemProps {
    picture: string;
    freeShipping: boolean;
    title: string;
    price:number;
    city: string;
  }

export const ProductListItem: FC<ProductListItemProps> = ({
  picture,
  price,
  title,
  freeShipping,
  city
}: ProductListItemProps) => {
    return <article className={ styles["item"]} >
           <div className={ styles["item-data"]}>
              <div className={ styles["item-picture"]}>
                <img src={picture} alt={title} />
              </div>
              <div className={ styles["item-info"]}>
                <span data-testid="price" >
                  {formatMoney( price ) }
                  {freeShipping && <i data-testid="icon">s</i>}
                </span>
                <p data-testid="title" >{ title }</p>
              </div>
           </div>
             <span data-testid="city" className={ styles["item-city"] }>{ city }</span>
    </article>
}
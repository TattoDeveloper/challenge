import React, { FC } from "react";
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
                <span>
                  $ { price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }
                  {freeShipping && <i>s</i>}
                </span>
                <p>{ title } </p>
              </div>
           </div>
             <span className={ styles["item-city"] }>{ city }</span>
    </article>
}
import { ProductDetailDTO } from '@meli-challenge/products/products-core';
import React from 'react'
import { Button } from 'react-bootstrap';
import { formatMoney } from '../../utils/util';
import styles from './product-card.module.scss';

/* eslint-disable-next-line */
export interface ProductCardProps extends ProductDetailDTO {}

export function ProductCard({
  picture,
  title,
  description,
  price,
  condition,
  sold_quantity
}: ProductCardProps) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__controls']}>
         <span className={styles['product-card__condition']}>
          { condition } - { sold_quantity } vendidos
         </span>
         <h1>{ title }</h1>
         <span className={styles['product-card__amount']}>
            { formatMoney( price.amount ) }
         </span>
          <Button className={styles['product-card__button']}> Comprar </Button>
      </div>  
      <div className={styles['product-card__info']}>
          <figure>
            <img src={picture}  alt={title} />
          </figure>
          <div>
            <h2>Descripción del producto</h2>
            <p>{ description }</p>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;

import { Product } from '@meli-challenge/products/products-core';
import React from 'react'
import { Button } from 'react-bootstrap';
import styles from './product-card.module.scss';

/* eslint-disable-next-line */
export interface ProductCardProps extends Product {}

export function ProductCard({
  picture,
  title,
  description,
  price
}: ProductCardProps) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__controls']}>
         <h1>{ title }</h1>
         <span>{ price.amount }</span>
          <Button className={styles['product-card__button']}> Comprar </Button>
      </div>  
      <div className={styles['product-card__info']}>
          <figure>
            <img src={picture}  alt={title} />
          </figure>
          <div>
            <h2>Descripcion del producto</h2>
            <p>{ description }</p>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;

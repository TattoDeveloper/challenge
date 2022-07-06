import React, { ReactElement, ReactNode } from 'react';
import styles from './product.module.scss';

/* eslint-disable-next-line */
export interface ProductListProps {
  children: ReactElement
}

export function ProductContainer({ children }: ProductListProps) {
  return (
    <section className={styles['product-list']}>
      {children}
    </section>
  );
}

export default ProductContainer;

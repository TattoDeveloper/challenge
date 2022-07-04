import React from 'react';
import styles from './breadcrumb.module.scss';

/* eslint-disable-next-line */
export interface BreadcrumbProps {}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Breadcrumb!</h1>
    </div>
  );
}

export default Breadcrumb;

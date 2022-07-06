import React from 'react';
import styles from './breadcrumb.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable-next-line */
export interface BreadcrumbProps {
  categories: string[]
}

export function Breadcrumb({ categories }: BreadcrumbProps) {
  return (
    <div className={styles['breadcrumb']}>
      <ul aria-label='breadcrumb'>
        {
          categories.map( ( category: string, index: number )=> {
            return <li key={category}>
                 { category }
                 { (index < categories.length - 1) && <FontAwesomeIcon icon={ faChevronRight } /> }
               </li>
          })
        }
      </ul>
    </div>
  );
}

export default Breadcrumb;

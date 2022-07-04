import React, { ReactNode } from 'react';
import { Container, Col } from 'react-bootstrap';
import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container className={ styles['guide'] }>
      <Col md={{span:10, offset: 1}} >
         { children }
      </Col>
  </Container>
  );
}

export default Layout;

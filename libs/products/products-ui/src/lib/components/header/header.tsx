
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import SearcBox from '../search-box/search-box';
import style from './header.module.scss'

export interface HeaderProps {
  logo: string
}

export function Header({
  logo
}: HeaderProps) {
  return (
    <header className={ style['header'] }>
      <Layout>
         <Row
          className={`align-items-center ${style['header-container']}`}>
            <Col className={style['header-logo']}>
              <Link to='/'>
                <img src={logo} alt='Logo Meli' />
              </Link>
            </Col>
            <Col xs={9} md={10} lg={11} className={style['header-search-container']}>
               <SearcBox />
            </Col>
          </Row>
       </Layout>
    </header>
  );
}

export default Header;

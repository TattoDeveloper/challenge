
import React from "react"
import { Container, Col, Row } from 'react-bootstrap';
import style from "./header.module.scss"

export interface HeaderProps {
  logo: string
}

export function Header({
  logo
}: HeaderProps) {
  return (
    <header className={ style['header'] }>
        <Container className={ style['header-container'] }>
          <Row
            className='align-items-center'>
            <Col xs={{span:1, offset: 1}} of>
              <img src={logo} alt="Logo Meli" />
            </Col>
            <Col xs={9}>
              <form>
                <i className="fas fa-search" aria-hidden="true"></i>
                <input type="search" placeholder="Nunca pares de buscar" />
              </form>
            </Col>
          </Row>
        </Container>
    </header>
  );
}

export default Header;

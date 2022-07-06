
import React from 'react';
import { Helmet } from 'react-helmet';


export interface HeadProps {
  title?: string
}

export function Head({
  title=''
}: HeadProps) {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>
          { title !== '' ? `${title} | Meli`: 'Meli'}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
        <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles." data-head-react="true"></meta>
     </Helmet>
    </>
  );
}

export default Head;

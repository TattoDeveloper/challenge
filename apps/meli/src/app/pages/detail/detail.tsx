import { ProductDetailDTO } from '@meli-challenge/products/products-core'
import {
    Breadcrumb, 
    DetailUseCase, 
    Head, 
    Layout, 
    ProductCard, 
    ProductContainer, 
    useAdapter 
} from '@meli-challenge/products/products-ui'
import { useParams } from 'react-router-dom'

export const Details = () => {
    const { id } = useParams()
    const { data: product, isLoad } = useAdapter<string, ProductDetailDTO>(DetailUseCase,[id as string])
   

    return (
        <Layout>
            <Head title={product ? product.title : ''} />
            <Breadcrumb categories={
                product ? [product.category as string, product.title] :
                ['']
            }/>
            <ProductContainer>
                <>
                {isLoad && <p>Cargando...</p>}
                {product && <ProductCard { ...product as ProductDetailDTO} />}
                </>
            </ProductContainer>
        </Layout>
    )
}
import { ProductDetailDTO } from "@meli-challenge/products/products-core"
import {
    Breadcrumb, 
    DetailUseCase, 
    Layout, 
    ProductCard, 
    ProductContainer, 
    useAdapter 
} from "@meli-challenge/products/products-ui"
import { useParams } from "react-router-dom"

export const Details = () => {
    const { id } = useParams()
    const { data: product, error, isLoad } = useAdapter<string, ProductDetailDTO>(DetailUseCase,[id as string])

    return (
        <Layout>
            <Breadcrumb categories={[]}/>
            <ProductContainer>
                <>
                {isLoad && <p>Cargando...</p>}
                {product && <ProductCard { ...product as ProductDetailDTO} />}
                </>
            </ProductContainer>
        </Layout>
    )
}
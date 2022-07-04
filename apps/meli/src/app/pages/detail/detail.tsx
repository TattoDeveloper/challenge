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
    const { data, error, isLoad } = useAdapter<any, any>(DetailUseCase,[id])

    return (
        <Layout>
            <Breadcrumb/>
            <ProductContainer>
                <>
                {isLoad && <p>Cargando...</p>}
                {data && <ProductCard {...data} />}
                </>
            </ProductContainer>
        </Layout>
    )
}
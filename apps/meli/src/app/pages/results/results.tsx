import { Product, SearchResultDTO } from "@meli-challenge/products/products-core"
import { Breadcrumb, 
    Layout, ProductContainer, 
    ProductListItem, 
    SearchUseCase, useAdapter } from "@meli-challenge/products/products-ui"
import { Link, useSearchParams } from "react-router-dom"

export const Results = () => {
    const[ searchParams ] = useSearchParams()
    const query: string = searchParams.get('search') as string;
    const { data, error, isLoad } = useAdapter<string, SearchResultDTO>(SearchUseCase,[query])

    return (
        <Layout>
            <Breadcrumb categories={ data?.categories?.length ? data?.categories : [query]}  />
            <ProductContainer>
               <>
               { isLoad && <p>Cargando...</p> }
               { error && <p>Algo ha fallado</p> }
               {
                 data && data.products.map(( product:Product )=> {
                    return <Link to={`/items/${product.id}`}>
                         <ProductListItem 
                              key={product.id}
                              title={product.title}
                              price={product.price.amount}
                              picture={product.picture}
                              freeShipping={product.free_shipping}
                              city={product.city as string}
                            />
                    </Link>
                 })
               }
               </>
            </ProductContainer>
        </Layout>
    )
}
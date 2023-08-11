import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"


const SimilarProduts = ({ product }) => {

  const [ productsByCategory,  getProductsByCategory ] = useFetch()

  useEffect(() => {
    if(product){
      getProductsByCategory(`/products?categoryId=${product.categoryId}`)
    }
    }, [product])
  
    const callbackFilter = prod => {
      if(prod.id !== product.id){
        return prod
      }
    }

  return (
    <div>
      <h2>Similar Product</h2>
      <div>
        {
          productsByCategory?.filter(callbackFilter).map(prod => (
            <CardProduct 
              key={prod.id}
              product= {prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SimilarProduts

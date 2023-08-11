import { useNavigate } from "react-router-dom"
import useCartApi from "../../hooks/useCartApi"
import './styles/CardProduct.css'

const CardProduct = ({ product }) => {

const navigate = useNavigate ()

const { addToCard } = useCartApi()

const handleNavigate = ( ) => {
  navigate(`/product/${product.id}`)
}

const handleAddCart = e => {
  e.stopPropagation()
  const data = {
    quantity: 1,
    productId: product.id
  }
  addToCard(data)
}

  return (
    <article className="card" onClick={handleNavigate}>
      <header className="card__header">
        <img className="card__img card__img1" src={product.images[0].url} alt="" />
        <img className="card__img card__img2" src={product.images[1].url} alt="" />
      </header>
      <section className="card__body">
        <header className="card__body__header">
        <h4 className="card__brand">{product.brand}</h4>
        <h3 className="card__title">{product.title}</h3>
        </header>
        <article className="card__price"> 
          <h3 className="card__price__label">Price</h3>0
          <span className="card__price__value">{product.price}</span>
        </article>
        <button className="card__btn" onClick={handleAddCart}><i className='bx bx-cart-alt'></i></button>
      </section>
    </article>
  )
}

export default CardProduct

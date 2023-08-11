import { useDispatch, useSelector } from "react-redux"
import { getCardThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartItem from "../components/CartPage/CartItem"
import UsePurshases from "../hooks/UsePurshases"


const CartPage = () => {


  const cart =  useSelector(reducer => reducer.cart)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardThunk())
  }, [])

  const totalAmount = cart.reduce( (acum, va) => {
    const subtotal = va.quantity * va.product.price
    return acum + subtotal
  }, 0)

  const { makePurshase } = UsePurshases()

  const handlePurshase = () => {
    makePurshase()
  }

  return (
    <section>
      <h2>cart</h2>
      <div>
        {
          cart.map(prod => (
            <CartItem 
            key={prod.id}
            prodCart={prod}
            />
          ))
        }
      </div>
      <footer>
        <span>Total: </span>
        <h3>{totalAmount}</h3>
        <button onClick={handlePurshase}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage

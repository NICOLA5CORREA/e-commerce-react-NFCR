
const ProductPurshased = ({ purshase }) => {
  return (
    <article>
      <header>
        <img src={purshase.product.images[0].url} alt="" />
      </header>
      <h3>{purshase.product.title}</h3>
      <span>{purshase.quantity}</span>
      <span>{purshase.quantity * purshase.product.price}</span>
    </article>
  )
}

export default ProductPurshased

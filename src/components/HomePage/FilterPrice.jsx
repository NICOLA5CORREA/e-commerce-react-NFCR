import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

  const { register, reset, handleSubmit } = useForm()
  const submit = data => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
    from: from || 0,
    to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article className="price__container">
      <h3 className="price__title">Price</h3>
      <form className="form__container" onSubmit={handleSubmit(submit)}>
        <div>
          <label className="label__form" htmlFor="from">From</label>
          <input className="input__from" {...register('from')} type="number" id="from" />
        </div>
        <div>
          <label className="label__form" htmlFor="to">To</label>
          <input className="input__to" {...register('to')} type="number" id="to" />
        </div>
        <button className="price__btn" >Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice

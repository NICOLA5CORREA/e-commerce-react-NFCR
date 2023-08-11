import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import './styles/HomePage.css'

const HomePage = () => {

  const [nameValue, setNameValue] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef()

  const handleFilterName = () => {
    setNameValue(inputName.current.value)
  };

  const cbFilter = prod => {
    //Filter by name
    const inputNameLower = nameValue.toLowerCase().trim()
    const nameReal = prod.title.toLowerCase()
    const filterName = nameReal.includes(inputNameLower)
    //Filter by price
    const price = +prod.price
    const filterPrice = fromTo.from <= price && price <= fromTo.to 
    return filterName && filterPrice
  }

  return (
    <div className="filters__container">
      <input className="filter__category" value={nameValue} ref={inputName} onChange={handleFilterName} placeholder="What are you looking for?" type="text" />
      <button className="search__btn">🔍</button>
      <FilterCategory/>
      <FilterPrice 
        setFromTo={setFromTo}
      />
      <div className="product-container">
        {
          products?.filter(cbFilter).length
          ? products?.filter(cbFilter).map((prod) => (
            <CardProduct key={prod.id} product={prod} />
          ))
          : <h2>Sorry😓, there no products with this filters❌😵‍💫</h2>
        }
      </div>
    </div>
  );
};

export default HomePage;

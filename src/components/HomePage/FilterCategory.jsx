import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import './styles/FilterCategory.css'

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const dispatch = useDispatch();

  const handleAllCategories = id => {
    dispatch(getAllProductsThunk(id));
  };

  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <section className="category__container">
      <h3 className="category__title">Category</h3>
      <ul className="category__ulist-container">
        <li className="category__list" onClick={handleAllCategories}>All Categories</li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterCategory;

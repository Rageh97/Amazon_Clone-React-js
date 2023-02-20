import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {STATUS} from "../Utilts.js/Status"
import Loader from "../Utilts.js/Loader";
import ProductList from "../Components/ProductList";
import { useEffect } from "react";
import {
  fetchSearchItem,
  getSearchProducts,
  getSearchProductsStatus,
  clearSearch,
} from "../RTK/Slices.js/searchSlice";
const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);
  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchSearchItem(searchTerm));
  }, [searchTerm]);
  if (searchProducts.length === 0) {
    return (<>
    
      <div>
        <h2 className="bg-danger text-white p-3 text-center mt-5 mb-5">Not Found !</h2>
      </div>
    
    </>);
  }
  return (
    
    <main>
      <div>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3>Search results:</h3>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;

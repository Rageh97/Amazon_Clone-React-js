import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProductsOfCategory, getAllProductsByCategory, getAllProductsByCategoryStatus} from '../RTK/Slices.js/categorySlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { STATUS } from '../Utilts.js/Status';
import Loader from '../Utilts.js/Loader';
import ProductList from '../Components/ProductList';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "../Components/Scroll";
const Category = () => {
  const dispatch = useDispatch()
  const {category} = useParams()
  const categoryProducts = useSelector(getAllProductsByCategory)
  const categoryProductsStatus = useSelector(getAllProductsByCategoryStatus)
  useEffect(() => {
    dispatch(fetchProductsOfCategory(category))
  },[dispatch,category])
  return (
    <>
    <ScrollToTop />
    <ToastContainer/>
    <section className='py-5 home-2'>
      <div className="container">
        <div className="row">
        <div className="title-md-category">
                  <h3
                    style={{
                      borderLeft: "5px solid black",
                      backgroundColor: "#febd69",
                      boxShadow: "0 0 5px #696969",
                    }}
                    className="text-dark mb-3 mx-3 w-100 text-center p-3"
                  >
                    {category}
                  </h3>
                </div>
          {categoryProductsStatus===STATUS.Loading ? <Loader/> : <ProductList products = {categoryProducts}/>}
        </div>
      </div>
    </section>
    </>
  )
}

export default Category
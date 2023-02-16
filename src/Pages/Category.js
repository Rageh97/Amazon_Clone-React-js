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
    <ToastContainer/>
    <section className='py-5 home-2'>
      <div className="container">
        <div className="row">
        <h3>See our <span className='text-capitalize'>{category}</span></h3>
          {categoryProductsStatus===STATUS.Loading ? <Loader/> : <ProductList products = {categoryProducts}/>}
        </div>
      </div>
    </section>
    </>
  )
}

export default Category
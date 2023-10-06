import React from "react";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../RTK/Slices.js/categorySlice";
import { fetchProducts } from "../RTK/Slices.js/productsSlice";
import { STATUS } from "../Utilts.js/Status";
import Loader from "../Utilts.js/Loader";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  getAllProducts,
  getAllProductsStatus,
} from "../RTK/Slices.js/productsSlice";
import ProductList from "../Components/ProductList";
import ScrollToTop from "../Components/Scroll";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);
  const categories = useSelector(getAllCategory);
  useEffect(() => {
    dispatch(fetchProducts(20));
  }, []);
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );
  let catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );
  let catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );
  let catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );

  return (
    <>
   
      <ScrollToTop />
      <ToastContainer />
      
      <section className="home-2">
        <div className="py-5">
          <div className="container-fluid">
            <div className="row">
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
              <div className="categories-item mb-5 py-3">
                <div className="title-md ">
                  <h3
                    style={{
                      borderLeft: "5px solid black",
                      backgroundColor: "#febd69",
                      boxShadow: "0 0 5px #696969",
                    }}
                    className="text-dark mb-3 mx-3 w-25 text-center p-3"
                  >
                    {categories[0]}
                  </h3>
                </div>
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsOne} />
                )}
              </div>
              <div className="categories-item home-2 mb-5 py-3">
                <div className="title-md">
                  <h3
                    style={{
                      borderLeft: "5px solid black",
                      backgroundColor: "#febd69",
                      boxShadow: "0 0 5px #696969",
                    }}
                    className="text-dark mb-3 mx-3 w-25 text-center p-3"
                  >
                    {categories[1]}
                  </h3>
                </div>
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsTwo} />
                )}
              </div>
              <div className="categories-item home-2 mb-5 py-3">
                <div className="title-md">
                  <h3
                    style={{
                      borderLeft: "5px solid black",
                      backgroundColor: "#febd69",
                      boxShadow: "0 0 5px #696969",
                    }}
                    className="text-dark mb-3 mx-3 w-25 text-center p-3"
                  >
                    {categories[2]}
                  </h3>
                </div>
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsThree} />
                )}
              </div>
              <div className="categories-item home-2 mb-5 py-3">
                <div className="title-md">
                  <h3
                    style={{
                      borderLeft: "5px solid black",
                      backgroundColor: "#febd69",
                      boxShadow: "0 0 5px #696969",
                    }}
                    className="text-dark mb-3 mx-3 w-25 text-center p-3"
                  >
                    {categories[3]}
                  </h3>
                </div>
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsFour} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="" />
                  </div>
                  <div>
                    <img src="images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      
    </>
  );
};

export default Home;

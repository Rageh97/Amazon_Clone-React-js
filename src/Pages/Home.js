import React from "react";
import ProductCard from "../Components/ProductCard";
import BlogCard from "../Components/BlogCard";
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
    dispatch(fetchProducts(50));
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
    

      {/*      
      <section className="home-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="main-banner-content position-absolute">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <h5>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h5>
                  <p>$100.00</p>
                  <Link className="button">Buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>
                      $100 or <br /> $80
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>
                      $100 or <br /> $80
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>
                      $100 or <br /> $80
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>
                      $100 or <br /> $80
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free shopping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily surprise over</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>support 24/7</h6>
                    <p className="mb-0">shop with in expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Afforable prices</h6>
                    <p className="mb-0">Get factory Default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% protect Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="category d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart warches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music $ Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart warches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music $ Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Feature Products</h3>
            </div>
            <div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>
            <div>
              <div>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>
            <div>
              <div>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>
            <div>
              <div>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>
            <div>
              <div>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="famous py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative bg-dark">
                <img className="w-100" src="images/famous-1.png" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-white">Big Screen</h5>
                  <h6 className="text-white">Smart watch series</h6>
                  <p className="text-warning">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="w-100 img-fluid"
                  src="images/camera.jpg"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart watch series</h6>
                  <p className="text-warning">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img className="w-100 img-fluid" src="images/tv.jpg" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart watch series</h6>
                  <p className="text-warning">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="w-100 img-fluid"
                  src="images/laptop.jpg"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart watch series</h6>
                  <p className="text-warning">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-product py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
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

      <section className="blogs py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Our Latest Blogs</h3>
            </div>
            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;

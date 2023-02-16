// import React from "react";
// import BreadCrum from "../Components/BreadCrum";
// import ReactStars from "react-rating-stars-component";
// import Meta from "../Components/Meta";
// import { useState,useEffect } from "react";
// import ProductCard from "../Components/ProductCard";
// import Colors from "../Components/Colors";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllCategory } from "../RTK/Slices.js/categorySlice";
// import { fetchCategories } from "../RTK/Slices.js/categorySlice";
// import { toast } from 'react-toastify';
// import { Link } from "react-router-dom";
// import Loader from "../Utilts.js/Loader";
// const OurStore = ({products}) => {
//   const [grid, setGrid] = useState(4);
//   const dispatch = useDispatch();
//   const categories = useSelector(getAllCategory);
//   useEffect(() => {
//     dispatch(fetchCategories())
//   },[dispatch])
//   return (
//     <>
//       <Meta title={"our store"} />
//       <BreadCrum title="Our Store" />

//       <div className="store py-5 home-2">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-3">
//               <div className="filter-card mb-3">
//                 <h3 className="filter-title">Shop By Categories</h3>
//                 <div>
//                   <ul className="ps-0">
//                     {categories.slice(0,8).map((category,idx) => {
//                       return (
//                         <>
//                         <div className="d-flex flex-column ">
//                         <Link className="text-secondary" to={`/product ${category}`}>
//                         <li>{category}</li>
//                         </Link>
//                         </div>
//                         </>
//                       )
//                     })}
//                     {/* <li>Camera</li>
//                     <li>Tv</li>
//                     <li>Laptop</li> */}
//                   </ul>
//                 </div>
//               </div>
//               <div className="filter-card mb-3">
//                 <h3 className="filter-title">Filter By</h3>
//                 <div>
//                   <h5 className="sub-title">Availability</h5>
//                   <div>
//                     <div className="form-check">
//                       <label className="form-check-label">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           name=""
//                           id=""
//                           value="checkedValue"
//                         />
//                         In Stock (1)
//                       </label>
//                       <label className="form-check-label d-block">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           name=""
//                           id=""
//                           value="checkedValue"
//                         />
//                         Out of stock(0)
//                       </label>
//                     </div>
//                   </div>
//                   <h5 className="sub-title mt-4">Price</h5>
//                   <div className="d-flex gap-10 align-items-center">
//                     <div className="form-floating py-1 ">
//                       <input
//                         style={{ height: "15px" }}
//                         className="form-control"
//                       />
//                       <label>from</label>
//                     </div>
//                     <div className="form-floating py-1 ">
//                       <input
//                         style={{ height: "15px" }}
//                         className="form-control"
//                       />
//                       <label>to</label>
//                     </div>
//                   </div>
//                   <h5 className="sub-title mt-4">Colors</h5>
//                   <div>
//                     <div className="d-flex flex-wrap">
//                       <Colors />
//                     </div>
//                   </div>
//                   <h5 className="sub-title mt-4">Size</h5>
//                   <div>
//                     <div className="form-check">
//                       <label className="form-check-label">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           name=""
//                           id=""
//                           value="checkedValue"
//                         />
//                         S (2)
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <label className="form-check-label">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           name=""
//                           id=""
//                           value="checkedValue"
//                         />
//                         M (2)
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="filter-card mb-3">
//                 <h3 className="filter-title">Product Tag</h3>
//                 <div className="product-tag d-flex flex-wrap gap-10 align-items-center">
//                   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                     HeadPhone
//                   </span>
//                   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                     Laptop
//                   </span>
//                   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                     Mobile
//                   </span>
//                   <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                     Wire
//                   </span>
//                 </div>
//               </div>
//               <div className="filter-card mb-3">
//                 <h3 className="filter-title">Random Product</h3>
//                 <div>
//                   <div className="random-product d-flex ">
//                     <div className="w-50">
//                       <img
//                         className="img-fluid"
//                         src="images/watch.jpg"
//                         alt=""
//                       />
//                     </div>
//                     <div className="w-50">
//                       <h5>
//                         Kids headphones bulk 10 pack multi colored for students
//                       </h5>
//                       <ReactStars
//                         count={5}
//                         value={3}
//                         edit={false}
//                         size={24}
//                         activeColor="#ffd700"
//                       />
//                       <b>$300</b>
//                     </div>
//                   </div>
//                   <div className="random-product d-flex mt-3">
//                     <div className="w-50">
//                       <img
//                         className="img-fluid"
//                         src="images/watch.jpg"
//                         alt=""
//                       />
//                     </div>
//                     <div className="w-50">
//                       <h5>
//                         Kids headphones bulk 10 pack multi colored for students
//                       </h5>
//                       <ReactStars
//                         count={5}
//                         value={3}
//                         edit={false}
//                         size={24}
//                         activeColor="#ffd700"
//                       />
//                       <b>$300</b>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-9">
//               <div className="filter-sort mb-4">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="d-flex align-items-center gap-10">
//                     <p style={{ width: "100px" }} className="mb-0">
//                       Sort By :
//                     </p>
//                     <select className="form-control form-select">
//                       <option value="">Featured</option>
//                       <option value="">Best selling</option>
//                       <option value="">Alphabetically, A-Z</option>
//                       <option value="">Alphabetically, Z-A</option>
//                       <option value="">Price, low to high</option>
//                       <option value="">Price, high to low</option>
//                       <option value="">Date, old to new</option>
//                       <option value="">Date, new to old</option>
//                     </select>
//                   </div>
//                   <div className="d-flex align-items-center gap-10">
//                     <p className="total-products mb-0">21 Products</p>
//                     <div className="d-flex align-items-center gap-10 grid">
//                       <img
//                         onClick={() => {
//                           setGrid(3);
//                         }}
//                         className="img-fluid d-block"
//                         src="images/gr4.svg"
//                         alt=""
//                       />

//                       <img
//                         onClick={() => {
//                           setGrid(4);
//                         }}
//                         className="img-fluid d-block"
//                         src="images/gr3.svg"
//                         alt=""
//                       />
//                       <img
//                         onClick={() => {
//                           setGrid(6);
//                         }}
//                         className="img-fluid d-block"
//                         src="images/gr2.svg"
//                         alt=""
//                       />
//                       <img
//                         onClick={() => {
//                           setGrid(12);
//                         }}
//                         className="img-fluid d-block"
//                         src="images/gr.svg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="products-list pb-5">
//                 <div className="d-flex gap-10 flex-wrap">
//                 <ProductCard/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurStore;

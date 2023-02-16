import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {
  return (
    
        <div className="d-flex flex-wrap justify-content-between">
          
            {products?.map((product) => {
              let discountedPrice =
                product.price -
                product.price * (product.discountPercentage / 100);

              return (
                <ProductCard
                  key={product.id}
                  product={{ ...product, discountedPrice }}
                />
              );
            })}
          </div>
      
     
  );
};

export default ProductList;

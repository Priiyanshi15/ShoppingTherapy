import React from 'react'
import { products } from '../data_json'
import { NavLink } from 'react-router-dom'

const Category = () => {

    const uniqueCategory = [...new Set(products?.map((product) => (product?.Category)))]
    
    const uniqueProduct = uniqueCategory.map((category) => {return products?.filter((product) => product?.Category == category)[0]})
    console.log(uniqueProduct);

   return (
  <div className="container-fluid m-0 mt-3">
    <div className="d-flex gap-2 px-2 scrolling">
      {uniqueProduct.map((product, ind) => {
        return (
          <div className="border d-flex rounded gap-1 category-width product-box-color">
          <NavLink to={`/single-product/${product?.Id}`} className="text-decoration-none">
            <div>
              <img
                src={product?.Image[0]}
                alt=""
                className="border m-2 rounded category-img-style fit-content"
              />
            </div>

            <div className="d-flex justify-content-center align-items-center category-style product-text-color">
              <p className="fs-4 fs-sm-6 p-2 product-text-color">{product?.Category}</p>
            </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  </div>
);
}


export default Category
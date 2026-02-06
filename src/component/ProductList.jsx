import React, { useState } from "react";
import { products } from "../data_json";
import { NavLink } from "react-router-dom";

const ProductList = ({ ProductJson, title }) => {
  const [setImage, changeSetImage] = useState("");
  const [imageIndex, changeImageIndex] = useState("");

  const handleOnMouseMove = (img, ind) => {
    changeSetImage(img);
    changeImageIndex(ind);
  };

  const handleOnMouseLeave = (img) => {
    changeSetImage(img);
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="text-secondary m-0">{title}</h3>

      <div className="row mt-3 mx-2 rounded d-flex border-bottom border-end">
        {ProductJson?.map((product, ind) => {
          return (
            ind < 8 && (
              
              <div className="col-sm-6 col-lg-3">
                
                <NavLink to={`/single-product/${product?.Id}`}className="border-top border-start d-flex flex-column align-items-center productList-box-style text-decoration-none">
                  <div className="m-2">
                    <img
                      src={
                        setImage != "" && imageIndex == ind
                          ? setImage
                          : product?.Image[0]
                      }
                      alt=""
                      className="product-img rounded fit-content"
                      onMouseMove={() =>
                        handleOnMouseMove(product?.Image[1], ind)
                      }
                      onMouseLeave={() => handleOnMouseLeave(product?.Image[0])}
                    />
                  </div>
                
               <div className="d-flex flex-column justify-content-center align-items-center gap-1 m-1">
                  <h6 className="m-0 text-secondary">{product?.Name}</h6>
                  <p className="m-0 text-danger">₹ {product?.Price}</p>

                  <div className="d-flex m-0 text-warning">
                    <p>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p>
                      <i className="fa-solid fa-star"></i>
                    </p>
                  </div>
                </div>
                </NavLink>
                
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

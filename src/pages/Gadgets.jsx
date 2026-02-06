import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { products } from "../data_json";
import { NavLink } from "react-router-dom";

const Gadgets = (product, ind) => {
  const [filterProduct, setFilterProduct] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [listProducts, setListProducts] = useState([]);
  const [min, max] = filterPrice.split("-");
  const gadgetProduct = products?.filter(
    (product) => product?.Type == "Electronics" && product
  );

  const handleFilterProduct = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilterProduct([...filterProduct, value]);
    }
    if (!checked) {
      const UpdatedFilterList = filterProduct?.filter(
        (product) => product != value
      );
      setFilterProduct(UpdatedFilterList);
    }
  };

  const handleFilterPrice = (e) => {
    const { checked, value } = e.target;
    if (checked && value == "All") {
      setFilterPrice("All");
    }
    if (checked && value != "All") {
      setFilterPrice(value);
    }
  };

  useEffect(() => {
    const filteredProductList = gadgetProduct?.filter((product) => {
      if (filterProduct?.length == 0) {
        return product;
      } else {
        return filterProduct?.includes(product?.Category) && product;
      }
    });

    //  setListProducts(filteredProductList);

    if (filterProduct?.length == 0) {
      const filterByPrice = gadgetProduct?.filter((product) => {
        if (filterPrice == "All") {
          return product;
        }
        if (filterPrice != "All") {
          return product?.Price >= min && product?.Price < max && product;
        }
      });
      setListProducts(filterByPrice);
    }

    if (filterProduct?.length > 0) {
      const filterByPriceAndProduct = filteredProductList?.filter((product) => {
        if (filterPrice == "All") {
          return product;
        }
        if (filterPrice != "All") {
          return product?.Price >= min && product?.Price < max && product;
        }
      });
      setListProducts(filterByPriceAndProduct);
    }
  }, [filterProduct, filterPrice]);
  
  return (
    <Layout>
      <div className="container-fluid mt-2">
        <div className="row d-flex row-height-90vh px-3 overflow-y-scroll remove-scroll">
          <div className="col-md-3 col-lg-2 d-md-block d-none border">
            <div className="row">
              <div className="col-12 bg-secondary m-0 py-2">
                <p className="text-light text-center fs-5">Filter Products</p>
              </div>

              <div className="col-12 d-flex align-items-center gap-3 mt-3">
                <input
                  type="checkbox"
                  id="airpods"
                  className="checkbox-style"
                  value="Airdopes"
                  onChange={handleFilterProduct}
                />
                <label htmlFor="airdopes" className="m-0 text-secondary fs-4">
                  Airdopes
                </label>
              </div>

              <div className="col-12 d-flex align-items-center gap-3 mt-3">
                <input
                  type="checkbox"
                  id="mobile"
                  className="checkbox-style"
                  value="Mobile"
                  onChange={handleFilterProduct}
                />
                <label htmlFor="mobile" className="m-0 text-secondary fs-4">
                  Mobile
                </label>
              </div>

              <div className="col-12 d-flex align-items-center gap-3 mt-3">
                <input
                  type="checkbox"
                  id="watch"
                  className="checkbox-style"
                  value="Watch"
                  onChange={handleFilterProduct}
                />
                <label htmlFor="watch" className="m-0 text-secondary fs-4">
                  Watch
                </label>
              </div>

              <div className="col-12 d-flex align-items-center gap-3 mt-3">
                <input
                  type="checkbox"
                  id="headphones"
                  className="checkbox-style"
                  value="Headphones"
                  onChange={handleFilterProduct}
                />
                <label htmlFor="headphones" className="m-0 text-secondary fs-4">
                  Headphones
                </label>
              </div>

              <div className="col-12 bg-secondary m-0 py-2 mt-3">
                <p className="text-light text-center fs-5">Filter Price</p>
              </div>

              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  id="all"
                  className="checkbox-style"
                  name="filter_price"
                  value="All"
                  onChange={handleFilterPrice}
                  defaultChecked
                />
                <label htmlFor="all" className="fs-4 text-secondary">
                  All
                </label>
              </div>

              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  id="1kTo2k"
                  className="checkbox-style"
                  name="filter_price"
                  value="1000-2000"
                  onChange={handleFilterPrice}
                />
                <label htmlFor="1kTo2k" className="fs-4 text-secondary">
                  1000-2000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  id="2kTo5k"
                  className="checkbox-style"
                  name="filter_price"
                  value="2000-5000"
                  onChange={handleFilterPrice}
                />
                <label htmlFor="2kTo5k" className="fs-4 text-secondary">
                  2000-5000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  id="5kTo10k"
                  className="checkbox-style"
                  name="filter_price"
                  value="5000-10000"
                  onChange={handleFilterPrice}
                />
                <label htmlFor="5kTo10k" className="fs-4 text-secondary">
                  5000-10000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  id="15kTo20k"
                  className="checkbox-style"
                  name="filter_price"
                  value="10000-20000"
                  onChange={handleFilterPrice}
                />
                <label htmlFor="15kTo20k" className="fs-4 text-secondary">
                  10000-20000
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <div className="row row-gap-2">
              {listProducts?.length > 0 ? (
                   listProducts.map((product, ind) => {
                  
                  return (
                    <div className="col-6 col-md-4 col-lg-3" key={product?.ID}>
                      <NavLink to={`/single-product/${product?.Id}`} className="text-decoration-none">
                      <div>
                        <div className="w-100 p-1 d-flex justify-content-center bg-card-img p-1">
                          <img
                            src={product?.Image[0]}
                            alt=""
                            className="card-img fit-content"
                          />
                        </div>
                        <div className="py-2 d-flex flex-column gap-2">
                          <div className="d-flex m-0 p-0 text-warning">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>

                          <p className="text-secondary font-bold m-0 ">
                            {product?.Heading}
                          </p>

                          <div className="d-flex gap-3 m-0 fs-5">
                            <p className="m-0 text-decoration-line-through text-secondary">
                              <span>₹</span> {product?.Price + 100}
                            </p>
                            <p className="font-bold text-danger m-0">
                              <span>₹</span> {product?.Price}
                            </p>
                          </div>
                        </div>
                      </div>
                      </NavLink>
                    </div>
                  );
                 
                })
              ) : (
                <h2 className="text-secondary text-center mt-4">
                  No Products Found
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gadgets;

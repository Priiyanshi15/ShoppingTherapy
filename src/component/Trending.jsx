import React, {useState} from 'react'
import { products } from '../data_json';
import { NavLink } from 'react-router-dom';

const Trending = () => {

     const [setImage, changeSetImage] = useState("")
        const [imageIndex, changeImageIndex] = useState("")
    
        const handleOnMouseMove = (img, ind) => {
            changeSetImage(img)
            changeImageIndex(ind)
        }
    
        const handleOnMouseLeave = (img) => {
            changeSetImage(img)
        }

  const trendingProduct = products.filter((product) => product?.Trending == true)
  console.log('product', trendingProduct)

  return (
    <div className="container-fluid mt-4">
      <h3 className="text-secondary m-0">Trending Products</h3>

      <div className="row mt-3 px-2 row-gap-1">
        {trendingProduct.map((product, ind) => {
          return(
            <NavLink to=
            {`/single-product/${product?.Id}`} className="col-md-6 col-lg-4 text-decoration-none" key={product?.Id}>
              
              <div className="d-flex gap-3 border rounded">
                <div className="m-2 border rounded shadow">
                  <img src={setImage != "" && imageIndex == ind ? setImage : product?.Image[0]} alt="name"
                   className='trending-img fit-content'
                   onMouseMove={() => handleOnMouseMove(product?.Image[1], ind)}
                   onMouseLeave={() => handleOnMouseLeave(product?.Image[0])}
                   />
                </div>

                <div className="d-flex flex-column justify-content-center gap-2">
                  <div className="m-0 text-flow">
                    <h6>
                      {product?.Heading}
                    </h6>
                  </div>

                  <div className="d-flex m-0 gap-3">
                    <p className="m-0 text-decoration-line-through text-secondary">
                      <span>₹</span> {product?.Price + 100}
                    </p>
                    <p className='text-danger m-0'>
                      <span>₹</span> {product?.Price}
                    </p>
                  </div>
                </div>
              </div>
              
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Trending
import React, { useContext } from 'react'
import Layout from './Layout'
import { productContext } from '../App'

const AddToCart = () => {
  const {cartProducts, setCartProducts} = useContext(productContext);

  const handleIncrement = (id) => {
     const productIncreased = cartProducts?.map((product) => product?.Id == id ? {...product, Count : product?.Count + 1} : product);
     setCartProducts(productIncreased);
  }

  const handleDecrement = (id) => {
     const productIncreased = cartProducts?.map((product) => product?.Id == id ? {...product, Count : (product.Count>1) ? product?.Count - 1 : 1} : product);
     setCartProducts(productIncreased);
  }

  const handleRemoveCartProduct = (id) => {
     const cartProductRemaining = cartProducts?.filter((product) => product?.Id != id);
     setCartProducts(cartProductRemaining);
  }

  const allPrices = cartProducts?.map((product) => parseInt(product?.Price) * parseInt(product?.Count));
  const totalPrice = allPrices?.reduce((total, curr) => total+curr, 0);

  return (
    <Layout>
    <div className="container-fluid mt-4 width-100vw">
        <div className="row row-height-90vh">
            <div className="col-lg-8 col-md-8 col-sm-12 mx-2">
                {cartProducts?.length > 0 ? 
                <div className="row mx-1 row-gap-2">
                   {cartProducts?.map((product) => {return (<div className='col-lg-3 col-md-3 col-sm-2 w-100 d-flex border rounded'>
                      <div className='w-100 d-flex flex-column gap-2 p-2'>
                        <div className='border rounded cart-product-img fit-content'>
                            <img src={product?.Image[0]} alt="error" className='h-100 w-100 p-1'/>
                        </div>
                        <div className='w-100 d-flex gap-4 mt-2'>
                           <button className='border inc-dec-button' onClick={() => handleIncrement(product?.Id)}>+</button>
                           <button className='border inc-dec-button'>{product?.Count}</button>
                           <button className='border inc-dec-button' onClick={() => handleDecrement(product?.Id)}>-</button>
                        </div>
                      </div>
                      <div className='col-lg-9 col-md-9 col-sm-10 d-flex flex-column py-2'>
                           <h6 className='text-flow-3'>{product?.Heading}</h6>
                           <h6 className='text-secondary'>{product?.Name}</h6>
                           <h6 className='text-secondary'>{product?.Brand}</h6>
                           <h6 className='text-secondary'><span>₹{product?.Price}</span> <span className='text-success'>20% off</span></h6>
                           <h6 className='text-secondary'>{product?.Category}</h6>
                           <h6 className='d-inline text-danger font-weight cart-product-remove' onClick={() => handleRemoveCartProduct(product?.Id)}>REMOVE</h6>
                      </div>
                   </div>)})}
                </div> : <h3 className='d-flex text-center justify-content-center text-secondary'>Your cart feels empty.😔 </h3>}
                
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mx-2">
                {cartProducts?.length > 0 ? (
                <div className="card position-sticky">
                    <div className="card-header">Price Details</div>
                    <div className="card-body">
                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <p>Price ({cartProducts?.length} item(s))</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Discount</p>
                                <p>-₹{cartProducts?.length * 100}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Delivery Charge</p>
                                <p><span className='text-secondary text-decoration-line-through'>{cartProducts.length * 20}</span> <span className='text-success'>free</span></p>
                            </div>
                            <div className="d-flex justify-content-between py-3 border-top border-bottom">
                                <p className='font-weight'>Total</p>
                                <p className='font-weight'>{totalPrice - cartProducts?.length * 100}</p>
                            </div>
                            <p className='text-success'>You saved {cartProducts.length * 100} on this order.</p>
                        </div>
                    </div>
                </div>) : <h1></h1>}
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default AddToCart
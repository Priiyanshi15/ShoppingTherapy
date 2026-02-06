import React, {useContext, useEffect, useState} from 'react'
import Layout from './Layout'
import { products } from '../data_json'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { productContext } from '../App'
import { NavLink } from 'react-router-dom'

  const SingleProduct = () => {
  
  const {id} = useParams();
  const [mainProduct] = products?.filter((product) => product?.Id == id);

  const [productImage, setProductImage] = useState("");
  const {cartProducts, setCartProducts} = useContext(productContext);
  const [isPresentInCart, setIsPresentInCart] = useState(false);

  const gadgetProduct = products.filter((product => product?.Type.toLowerCase()=="electronics"))

  const fashionProduct = products.filter((product => product?.Type.toLowerCase()=="fashion"))

  const suggestedProducts = products.filter((product) => product?.Category == mainProduct?.Category);

  const handleEnterProductImage = (img) => {
      setProductImage(img);
      
  }

  const handleLeaveProductImage = (img) => {
      setProductImage(img);
  }

  const handleCartProducts= () => {
    const isAddedToCart = cartProducts?.filter((product) => product?.Id == mainProduct?.Id);
    if(isAddedToCart.length > 0){
        setIsPresentInCart(true);
       
    }
    else{
     setCartProducts([...cartProducts, mainProduct]) 
    }  
  }

  useEffect(() => {
    const isAddedToCart = cartProducts?.filter((product) => product?.Id == mainProduct?.Id);
    if(isAddedToCart.length > 0){
        setIsPresentInCart(true);
    }
    if(isAddedToCart.length == 0){
        setIsPresentInCart(false);
    }
  }, [cartProducts, mainProduct])

  console.log('cartProducts', cartProducts)

  return (
    <Layout>
        <div className="container-fluid mt-4">
            <div className="row justify-content-between">
                <div className="col-md-5 col-12">
                    <div className='d-flex justify-content-between p-2 border rounded'>
                        <div className="col-2 d-flex flex-column gap-2">
                        {mainProduct?.Image.map((image, ind) => {
                            return (<div className="category-img m-1 rounded  h-30 p-1"
                            onMouseEnter={() => handleEnterProductImage(image)}
                            onMouseLeave={() => handleLeaveProductImage(productImage)}>
                            <img src={image} alt={`Image: ${ind}`} className='h-100 w-100 rounded fit-content' />
                        </div>)})}
                        </div>
                        <div className="single-img-size p-1 rounded ">
                            <img src={productImage==""?mainProduct?.Image[0] : productImage} alt="" className='h-100 w-100 fit-content' />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12 d-md-flex flex-md-column d-column gap-3 p-2 m-1">
                    <div>
                        <h4 className='maroon-color'>{mainProduct?.Heading}</h4>
                    </div>
                    <div className="d-flex gap-3">
                        <p className='fs-5'>Model</p>
                        <p className='text-secondary fs-5'>{mainProduct?.Name}</p>
                    </div>
                    <div className="d-flex gap-3">
                        <p className='fs-5'>Brand</p>
                        <p className='text-secondary fs-5'>{mainProduct?.Brand}</p>
                    </div>
                    <div className="d-flex gap-3">
                        <p className='fs-5'>Price</p>
                        <p className='text-secondary fs-5'>₹{mainProduct?.Price}</p>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <div className='fs-5'>Rating</div>
                        <div className="d-flex gap-1 yellow-color fs-5">
                            <span className='orange-color'>4.5</span>
                            <span className='orange-color'><i class="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                    <div className="d-flex gap-5 mt-3">
                        
                        {isPresentInCart ? (<NavLink to='/AddToCart' className='button-size bg-warning p-2 rounded text-light fs-5 text-decoration-none' onClick={handleCartProducts}>Go to Cart</NavLink>) : (<button className='button-size bg-warning p-2 rounded text-light fs-5' onClick={handleCartProducts}>Add to Cart</button>)}
                        <button className='button-size bg-danger p-2 rounded text-light fs-5'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-4 mx-2 related-products-height">
            <ProductList ProductJson={suggestedProducts} title="Related Products"/>
        </div>
    </Layout>
  )
}
export default SingleProduct
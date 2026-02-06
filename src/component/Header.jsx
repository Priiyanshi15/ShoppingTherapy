import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="container-fluid width-100vw">
          <div className="row d-flex justify-content-between py-2 px-2 align-items-center header-custom width-100vw">
            <div className="col-2">
              <img src="src\component\ShoppingLogo.png" alt="error" height='60px'/>
            </div>
            <div className="col-10 d-sm-flex d-none justify-content-between">
              <div className="d-flex justify-content-center">
                <ul className="d-flex list-unstyled gap-5 m-0 fs-3">
                  <NavLink to='/' className="text-decoration-none text-light">HOME</NavLink>
                  <NavLink to='/gadgets' className="text-decoration-none text-light">GADGETS</NavLink>
                  <NavLink to='/fashion' className="text-decoration-none text-light">FASHION</NavLink>
                </ul>
              </div>

              <div className='d-flex gap-4 fs-3 m-0 justify-content-center'>
                <span>
                <i class="fa-solid fa-heart maroon-color"></i>
                </span>
                <NavLink to='/AddToCart' className="d-flex align-items-center text-decoration-none cart-link"><i className="fa-solid fa-cart-arrow-down text-light m-0 p-0"></i></NavLink>
              </div>

            </div>

            <div className='d-sm-none d-block col-1'>
                <i className="fa-solid fa-bars text-light"></i>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Header
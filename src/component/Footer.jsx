import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid mt-4 footer-style width-100vw">
      <div className="row px-3 py-3 d-flex align-items-center jusify-content-center h-100 width-100vw">
        <div className="col-lg-4 d-flex justify-content-center align-items-center h-100 text-light py-2">
          <img src="src\component\ShoppingLogo.png" alt="ShoppingTheray" height='80px'/>
        </div>
        <div className="col-lg-4 d-flex gap-lg-1 justify-content-center align-items-center h-100 text-light py-2">
          <div className='fs-5'>All rights reserved by UniqueYou</div>
          <i className="fa-solid fa-copyright fs-3 px-2"></i>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center gap-3 h-100 py-2">
          <div>
            <i class="fa-brands fa-instagram fs-2 text-light"></i>
          </div>
          <div>
            <i class="fa-brands fa-square-youtube fs-2 text-light"></i>
          </div>
          <div>
            <i class="fa-brands fa-x-twitter fs-2 text-light"></i>
          </div>
          <div>
            <i class="fa-brands fa-facebook fs-2 text-light"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react';

const Navigation = (props) => (
  <nav className="b--light-gray bb bg-near-white fixed flex h3 items-center justify-between justify-around-m justify-center-ns shadow-1 w-100 z-1">
    <div className="dn dib-l">
      <a className="b dim f6 fw4 gray link ttu" href="http://fender.com">
        Home
      </a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">
        Products
      </a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">
        Gift Guide
      </a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">
        Customize
      </a>
    </div>
    <img className="h2 mh4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fender_guitars_logo.svg/2000px-Fender_guitars_logo.svg.png" alt="Fender Logo"/>
    <div className="dn dib-l">
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">Find A Dealer
    </a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">
        <icon className="fa fa-phone"/> 1-844-202-0924

      </a>
      <a className="b dim f6 fw4 dark-red link ml3 ttu" href="http://fender.com">Sign In
    </a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com"><span className="fa fa-lg fa-shopping-cart" />
    </a>
    </div>
  </nav>
)

export default Navigation

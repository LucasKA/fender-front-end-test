import React from 'react';
import cn from 'classnames';

const Navigation = (props) => (
  <nav className={`b--light-gray bb bg-near-white fixed flex h3 items-center
    justify-between justify-center-l shadow-1 w-100 z-1`}>
    <button
      className="bn bg-transparent dn-l grow outline-0"
      onClick={props.toggleMenu}>
      <icon className={cn(`gray fa fa-2x ml2`, {
          "fa-filter": !props.filterBarToggled,
          "fa-times-circle": props.filterBarToggled
        }
      )} />
    </button>
    <div className="dn dib-l">
      <a className="b dim f6 fw4 gray link ttu"href="http://fender.com">Home</a>
      <a className="b dim f6 fw4 gray link ml3 ttu"href="http://fender.com">Products</a>
      <a className="b dim f6 fw4 gray link ml3 ttu"href="http://fender.com">Gift Guide</a>
      <a className="b dim f6 fw4 gray link ml3 ttu"href="http://fender.com">Customize</a>
    </div>
    <img className="h2 mh4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fender_guitars_logo.svg/2000px-Fender_guitars_logo.svg.png" alt="Logo"/>
    <div className="dn dib-l">
      <a className="b dim f6 fw4 gray link ml3 ttu"href="http://fender.com">Find A Dealer</a>
      <a className="b dim f6 fw4 gray link ml3 ttu" href="http://fender.com">
        <icon className="fa fa-phone"/> 1-844-202-0924
      </a>
      <a className="b dim f6 fw4 dark-red link ml3 ttu"href="http://fender.com">Sign In</a>
      <a className="b dim f6 fw4 gray link ml3 ttu"href="http://fender.com"><span className="fa fa-lg fa-shopping-cart" /></a>
    </div>
    <button
      className="bn bg-transparent dn-l grow mr2 outline-0"
      onClick={() => {console.log('this is a toggle placeholder')}}>
      <icon className="gray fa fa-2x fa-bars" />
    </button>
  </nav>
)

export default Navigation

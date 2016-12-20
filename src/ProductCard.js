import React from 'react';
import ImageFallback from 'react-image-fallback';
import products from './products';

const ProductCard = (props) => (
  <article className="bg-white w-50-m w-25-l ph2 pb2 pt2 flex flex-column items-center">
    <div className="ba b--silver br2">
      <h2 className="f4 fw1 title ph2 tc">
        {props.displayName ?  props.displayName : props.skuName }
      </h2>
      <ImageFallback
        className='bt bb b--light-gray w-100'
        src={props.images[0]}
        fallbackImage='http://uploads.fender.com/newsroom/logos/fender-red-large.jpg'
        initialImage='http://uploads.fender.com/newsroom/logos/fender-red-large.jpgf'
        alt='Product Image'
       />
       <div className="ph2">
         <h3 className="f4 fw1"><span className="b">Availability:</span>
           {props.inStock === 'inStock' ?
             <span className="green"> In Stock</span> :
             <span className="dark-red"> Out Of Stock</span>
           }
         </h3>
          <h4 className="fw1">
          Color(s): {props.colors.map(color => {
            if (props.colors.length === 1) {
              return <span key={color}>{color} </span>
            } else {
              return <span key={color}>{color}, </span>
            }
           })}
         </h4>
         <h4 className="fw1">Product No: {props.productNumber}</h4>
         <h4 className="fw1">UPC: 717669068455</h4>
       </div>
    </div>
  </article>
);

export default ProductCard;

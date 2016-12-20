import React, { Component } from 'react';
import ProductCard from './ProductCard';

//Normally an API call on app initialization , that I would populate to sessionStorage, or Redux 
import products from './products';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { productList: products.documents }
  }

  render() {
    return (
      <section className='product-list flex flex-wrap vh-100 w-100 mt5 pt2'>
        {this.state.productList.map(el => (
          <ProductCard
            colors={el.color_en}
            displayName={el.productDisplayName_en}
            images={el.images}
            key={el.productNo}
            inStock={el.inStock_US_CONSUMER}
            productNumber={el.productNo}
            skuName={el.skuDisplayName_en[0]}
          />
        ))}
      </section>
    );
  }
}

export default App;

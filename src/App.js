import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Navigation from './Navigation';

//Normally an API call on app initialization, that I would populate to sessionStorage or a Redux store
import products from './products';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { productList: products.documents }
  }

  render() {
    return (
    <div className="application-root system-sans-serif">
      <Navigation />
      <section className='product-list flex flex-wrap vh-100 w-100 pt5'>
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
    </div>
    );
  }
}

export default App;

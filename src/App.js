import React, { Component } from 'react';
import _ from 'lodash';
import cn from 'classnames';
import Navigation from './Navigation'
import ProductCard from './ProductCard';
import products from './products';

class App extends Component {
  constructor(props) {
    super(props)

    this.seriesFilters = _.uniq(_.map(products.documents, (el) => ( el.seriesId )));
    this.productFilters = _.uniq(_.map(products.documents, (el) => ( el.productType )));

    this.state = { productList: products.documents, filterBarToggled: false }

    this.clearFilters = this.clearFilters.bind(this)
    this.filterProducts = this.filterProducts.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  filterProducts(state, term, property) {
    const filtered = _.filter(state, [property, term])
    this.setState({ productList: filtered  })
  }

  clearFilters() {
    this.setState({ productList: products.documents })
  }

  toggleMenu() {
    return this.state.filterBarToggled ?
    this.setState({ filterBarToggled: false }) : this.setState({ filterBarToggled: true})
  }

  render() {
      return (
        <div className='app-root system-sans-serif'>
          <Navigation
            toggleMenu={this.toggleMenu}
            filterBarToggled={this.state.filterBarToggled}
          />
          <section className={cn(`filter-bar absolute bg-white fixed-l pt5 shadow-1 vh-100 db-l w-80 w-60-m w-20-l `, {
            "db": this.state.filterBarToggled,
            "dn": !this.state.filterBarToggled,
          })}>
            <header className="filter-header bg-red flex items-center justify-between ph2 white">
              <h3>Filters</h3>
              <button
                className="bg-white bn br-pill f6 outline-0 pa2 pointer red ttc"
                onClick={this.clearFilters}>
                Clear All
              </button>
            </header>

            <div className="series-filters pl2 pv1 bb b--light-gray flex flex-wrap items-center white">
              <h4 className="b--light-gray bb gray pb2 w-100">By Series:</h4>
              {_.map(this.seriesFilters, (term) => (
                <button
                  className="pa2 br-pill bn pointer f6 grow bg-gray mb2 mr1 outline-0 white ttc"
                  onClick={() => {this.filterProducts(this.state.productList, term, 'seriesId')}}
                  >
                    {_.head(_.split(term, '_'))}
                </button>
              ))}
            </div>

            <div className="prouduct-filters pl2 pv1 bb b--light-gray flex flex-wrap items-center white">
              <h4 className="bb pb2 b--light-gray gray w-100">By Product:</h4>
              {_.map(this.productFilters, (term) => (
                <button
                  className="pa2 br-pill bn pointer f6 grow bg-gray mb2 mr1 outline-0 white ttc"
                  onClick={() => {this.filterProducts(this.state.productList, term, 'productType')}}
                  >
                    {_.head(_.split(term, '_'))}
                </button>
              ))}
            </div>
          </section>

          <section className='product-list flex flex-wrap fr vh-100 w-80-l mt5 pt2'>
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
    )
  }
}

export default App;

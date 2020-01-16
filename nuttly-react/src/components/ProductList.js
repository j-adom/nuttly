//Jordan wrote this
//Need to update with correct api addresses not 'snipcart-strapi.heroku etc
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BuyButton from './BuyButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    }
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:1337/products"); //need to add correct address here
    if (!response.ok) {
      return
    }

    let products = await response.json()
    this.setState({ loading: false, products: products })
    console.log(this.state.products[0])
  }

  //creates list of existing products, need to add correct address here
  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2>
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {
              return (
                <div className="ProductList-product" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                    <img src={`http://localhost:1337${product.Image[0].url}`} alt={product.name} /> 
                  </Link>
                  <BuyButton product={product} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default ProductList;
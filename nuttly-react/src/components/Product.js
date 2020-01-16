//Jordan wrote this
//Need to update with correct api addresses not 'snipcart-strapi.heroku etc

import React, { Component } from 'react';
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, product: {} }
  }

  async componentDidMount() {
    let response = await fetch(`http://localhost:1337/products/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.product.name}</h2>
            <img src={`http://localhost:1337${this.state.product.Image[0].url}`} />
            <BuyButton {...this.state} />
          </div>
          <div className="product__description">
            {this.state.product.description}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;
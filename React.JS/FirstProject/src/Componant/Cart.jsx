import React, { Component } from "react";
import Product from "./../Product";

export default class Cart extends Component {
  //   props vs state
  render() {
    return (
      <>
        {!this.state.Products.length && <h2>there is no products</h2>}

        <button className="btn btn-info" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.Products.map((product) => (
          <Product
            key={product.id}
            product={product}
            // handleIncrement={handleIncrement}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </>
    );
  }
}

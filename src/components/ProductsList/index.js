import React, { Component } from "react";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: [{name:'prodotto1',count:10},{name:'prodotto2',count:1}]
    };
  

  }

  componentDidMount = () => {
    // TODO step 5 - fetch data from Firebase
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">

{this.state.products.map((product,index) => {
      return (
            <li className="list-group-item" key={index}>{product.name}>
              <span className="badge badge-pill badge-success">{product.count}</span>
            </li> 
        );
    })}
            {/* TODO step 3 - bring to life this list dynamic (using state) */}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;

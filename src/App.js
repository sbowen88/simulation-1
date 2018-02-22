import React, { Component } from 'react';
import axios from 'axios'; 

import Header from './components/Header';
import Dash from './components/Dash';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    axios.get('/api/products')
    .then(res => this.setState({products: res.data}))
  }
  updateProducts(productArr) {
    this.setState({products: productArr})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dash products={this.state.products}/>
        <Form updateProducts={this.updateProducts}/>
      </div>
    );
  }
}

export default App;

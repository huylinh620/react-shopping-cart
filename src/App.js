import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import {Provider} from 'react-redux';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    };
  }
  createOrder = (order) => {
    alert("You need save cart");
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    console.log(cartItems);
    cartItems.forEach((item) => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
      if(!alreadyInCart) {
        cartItems.push({...product, count: 1});
      }
      this.setState({cartItems});
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=>x._id !== product._id)
    })
    localStorage.setItem("cartItems",
     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
     )
  }

  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header className="app-header">
        <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter></Filter>
              <Products products={this.state.products} 
                        addToCart={this.addToCart}>
              </Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} 
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}>
              </Cart>
            </div>
          </div>
        </main>
        <footer>All copy right</footer>
      </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import HomeScreen from './screens/HomeScreen';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="grid-container">
          <header className="app-header">
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path="/admin" component={AdminScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

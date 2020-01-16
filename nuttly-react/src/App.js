import React, { Component } from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import NavHead from "./components/layout/NavHead";
// import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home"
import { Link } from 'react-router-dom'
import Product from './components/Product';

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavHead />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/productlist" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div >
      </div>
        </Router>
      </Provider>
    );
  }
}

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1>Nuttly Plant-based Milk Delivery</h1></Link>
      <div className="right">
        <button className="snipcart-checkout snipcart-summary">
          <i className="fa fa-shopping-cart"></i> Checkout (<span className="snipcart-total-items"></span>)
      </button>
      </div>
    </header>
  );
}

//Footer needs to be rewritten
const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="left">
        Made by <a href="https://snipcart.com/blog" target="_blank" rel="noopener noreferrer">Snipcart</a> and ⚡ by <a href="https://strapi.io/">Strapi</a>
      </div>
      <div className="right">
        <a href="https://github.com/snipcart/snipcart-strapi-react" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        <a href="https://twitter.com/snipcart" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
      </div>
    </footer>
  );
}

export default App;
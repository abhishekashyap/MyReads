import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

// Styles
import "./App.css";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </div>
      </Router>
    );
  }
}

export default BooksApp;

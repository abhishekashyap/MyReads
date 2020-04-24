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
    myBooks: [],
  };

  addToBookshelf = (book) => {
    if (book.shelf !== "none") {
      // if user switches from none to another shelf, append to array
      // else just change the shelf
      this.setState({ myBooks: [...this.state.myBooks, book] });
    }
  };

  removeFromBookshelf = (book) => {
    this.setState({
      myBooks: this.state.myBooks.filter((myBook) => myBook !== book),
    });
  };

  changeBookshelf = () => {
    return null;
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact>
            <Home
              myBooks={this.state.myBooks}
              addToBookshelf={this.addToBookshelf}
            />
          </Route>
          <Route path="/search">
            <Search
              myBooks={this.state.myBooks}
              addToBookshelf={this.addToBookshelf}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default BooksApp;

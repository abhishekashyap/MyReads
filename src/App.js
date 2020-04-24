import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getAll } from "./BooksAPI";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

// Styles
import "./App.css";

class BooksApp extends React.Component {
  state = {
    myBooks: [],
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ myBooks: books });
    });
  }

  addToBookshelf = (book) => {
    if (book.shelf !== "none") {
      // if user switches from none to another shelf, append to array
      // else just change the shelf
      this.setState((state) => {
        if (state.myBooks.includes(book)) {
          return { myBooks: [...this.state.myBooks] };
        } else {
          return { myBooks: [...this.state.myBooks, book] };
        }
      });
    } else {
      this.setState({
        // remove from bookshelf
        myBooks: this.state.myBooks.filter((myBook) => myBook !== book),
      });
    }
  };

  changeBookshelf = (book) => {};

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

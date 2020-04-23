import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList/BooksList";

// API
import { search } from "../BooksAPI";

class Search extends Component {
  state = {
    searchedBooks: [],
  };

  searchBook(e) {
    search(e.target.value.trim())
      .then((searchedBooks) => {
        if (searchedBooks.error) {
          console.log("error", searchedBooks.error);
          this.setState({ searchedBooks: [] });
        } else {
          console.log("search result", searchedBooks);
          this.setState({ searchedBooks });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ searchedBooks: [] });
      });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={(e) => this.searchBook(e)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList
            searchedBooks={this.state.searchedBooks}
            myBooks={this.props.myBooks}
            addToBookshelf={this.props.addToBookshelf}
          />
        </div>
      </div>
    );
  }
}

export default Search;

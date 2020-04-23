import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList/BooksList";

// API
import { search } from "../BooksAPI";

class Search extends Component {
  state = {
    books: [],
  };

  searchBook(e) {
    search(e.target.value.trim())
      .then((books) => {
        if (books.error) {
          console.log("error", books.error);
          this.setState({ books: [] });
        } else {
          console.log("search result", books);
          this.setState({ books });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ books: [] });
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
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              onChange={(e) => this.searchBook(e)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;

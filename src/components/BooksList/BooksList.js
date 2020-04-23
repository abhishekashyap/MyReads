import React, { Component } from "react";
// import { useLocation } from "react-router-dom";
import Book from "../Book/Book";

class BooksList extends Component {
  render() {
    // console.log(useLocation());
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.myBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} addToBookshelf={this.props.addToBookshelf} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BooksList;

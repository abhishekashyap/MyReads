import React, { Component } from "react";
import BooksList from "../BooksList/BooksList";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <BooksList
          myBooks={this.props.myBooks.filter(
            (book) =>
              book.shelf.toLowerCase() ===
              this.props.heading.toLowerCase().replace(/\s/g, "")
          )}
          addToBookshelf={this.props.addToBookshelf}
        />
      </div>
    );
  }
}

export default BookShelf;

import React, { Component } from "react";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
class Book extends Component {
  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={this.props.book.style} />
            <BookShelfChanger
              book={this.props.book}
              addToBookshelf={this.props.addToBookshelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </div>
    );
  }
}

export default Book;

import React, { Component } from "react";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
class Book extends Component {
  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
            {this.props.book && (
              <div
                className="book-cover"
                style={{
                  backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`,
                  height: "200px",
                  width: "140px",
                }}
              />
            )}
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

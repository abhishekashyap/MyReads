import React from "react";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";

function Book(props) {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={props.book.style} />
          <BookShelfChanger book={props.book} />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </div>
  );
}

export default Book;

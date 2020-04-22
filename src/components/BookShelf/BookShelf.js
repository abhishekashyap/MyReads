import React from "react";
import BooksList from "../BooksList/BooksList";

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.heading}</h2>
      <BooksList />
    </div>
  );
}

export default BookShelf;

import React from "react";
import { useLocation } from "react-router-dom";
import Book from "../Book/Book";

function BooksList(props) {
  let url = useLocation();
  return url.pathname === "/search" ? (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.searchedBooks.map((book) => (
          <li key={book.id}>
            <Book book={book} addToBookshelf={props.addToBookshelf} />
          </li>
        ))}
      </ol>
    </div>
  ) : (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.myBooks.map((book) => (
          <li key={book.id}>
            <Book book={book} addToBookshelf={props.addToBookshelf} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BooksList;

import React from "react";
import Book from "../Book/Book";

function BooksList(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (
          <li>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BooksList;

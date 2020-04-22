import React from "react";

function Book(props) {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={props.style} />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </div>
  );
}

export default Book;

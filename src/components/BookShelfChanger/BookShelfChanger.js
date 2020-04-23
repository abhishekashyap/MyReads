import React, { Component } from "react";
import { update } from "../../BooksAPI";

class BookShelfChanger extends Component {
  state = {
    value: this.props.book.shelf || "none",
  };

  handleChange = async (event) => {
    await this.setState({ value: event.target.value });
    console.log(this.state.value);

    this.props.book["shelf"] = this.state.value;
    this.props.addToBookshelf(this.props.book);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;

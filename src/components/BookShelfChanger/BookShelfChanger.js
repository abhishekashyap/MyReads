import React, { Component } from "react";
import { update } from "../../BooksAPI";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "none",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ value: this.props.book.shelf });
  }

  handleChange(event) {
    console.log(this.state.value);
    this.setState({ value: event.target.value });
    console.log(event.target.value);
    console.log(this.props.book);
    console.log(this.props.book.id);
    console.log(this.state.value);
    console.log(this.props.addToBookshelf);
    // update(this.props.book.id, this.value);
    this.props.book["shelf"] = this.state.value;
    this.props.addToBookshelf(this.props.book);
  }

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

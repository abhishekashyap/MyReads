import React, { Component } from "react";
import OpenSearch from "../components/OpenSearch/OpenSearch";
import BookShelf from "../components/BookShelf/BookShelf";
import { getAll } from "../BooksAPI";

export default class Home extends Component {
  componentDidMount() {
    getAll().then((books) => {
      books.map((book) => this.props.addToBookshelf(book));
      console.log(books);
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              myBooks={this.props.myBooks}
              addToBookshelf={this.props.addToBookshelf}
              heading="Currently Reading"
            />
            <BookShelf
              myBooks={this.props.myBooks}
              addToBookshelf={this.props.addToBookshelf}
              heading="Want to Read"
            />
            <BookShelf
              myBooks={this.props.myBooks}
              addToBookshelf={this.props.addToBookshelf}
              heading="Read"
            />
          </div>
        </div>
        <OpenSearch to="/search" />
      </div>
    );
  }
}

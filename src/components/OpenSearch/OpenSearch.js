import React from "react";
import { Link } from "react-router-dom";

import "./OpenSearch.css";

function OpenSearch(props) {
  return (
    <div className="open-search">
      <Link to={props.to}>Add a book</Link>
    </div>
  );
}

export default OpenSearch;

import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar--input"
        type="text"
        placeholder="Search for books"
        value={props.searchTerm}
        onChange={(e) => {
          props.setSearchTerm(e.target.value);
          props.setSelectedGenre(null);
        }}
      />
    </div>
  );
};

export default SearchBar;

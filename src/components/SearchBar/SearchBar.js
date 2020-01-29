import React from "react";
import "./SearchBar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// input component for searching through page elements

const SearchBar = ({ changed }) => {
  return (
    <form className="formEl">
      <input
        onChange={changed}
        className="textField"
        type="text"
        placeholder="Search for artist, event, or venue"
      />
      <button type="submit" className="btn-top">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;

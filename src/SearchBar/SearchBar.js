import React from 'react';
import $ from "jquery";
import "./SearchBar.scss";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
    }
    handleInput() {
        $(".input-search").keyup(function() {
        });
      }
    render() {
        return 'SearchBar';
    }
}

export default SearchBar;
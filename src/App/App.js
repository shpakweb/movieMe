import React from 'react';
import logo from './../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import './App.scss';
import MoviesList from '../MoviesList/MoviesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchBar = new SearchBar();
    this.filters = new Filters();
  }

  init() {
    this.render();
    this.searchBar.handleInput();
  }

  render(){
    return (
      <div>
        <Filters/><br/>
        <SearchBar/><br/>
        <MoviesList/><br/>
      </div>
    )
    
  }
}

export default App;

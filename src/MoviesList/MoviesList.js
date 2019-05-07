import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import "./MoviesList.scss";

class MoviesList extends React.Component {
    constructor(props) { 
        super(props);
    }
    render() {
        return (
            <div> 
                MoviesList <br/>
                <MovieItem/>
            </div>
        );
    }
}

export default MoviesList;
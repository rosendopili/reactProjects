import React from 'react';
import Movie from './Movie.js';
import Search from "./Search.js";
import './App.css';
import unirest from 'unirest';

class App extends React.Component {

  state = {
    movies: []
  }

  sendRequest = (title) => {
     const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
     req.query({
       "page": "1",
       "r": "json",
       "s": title
     });
     req.headers({
       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
       "x-rapidapi-key": "API-KEY"
     });
     req.end((res) => {
       const movies = res.body.Search;
       this.setState({movies});
      });
  }
  render(){
    return (
      <div className="App">
        {
          this.state.movies.map((movie) => {
            return <Movie {...movie}/>
          })
        }
          <Search handleSendRequest={this.sendRequest}/>
      </div>
    );
  }
}

export default App;

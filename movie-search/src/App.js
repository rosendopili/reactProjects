import React from 'react';
import Movie from './Movie.js';
import Search from "./Search.js";
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
       "s": "Avengers Endgame"
     });
     req.headers({
       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
       "x-rapidapi-key": "API-KEY"
     });
     req.end((res) => {
       if (res.error) throw new Error(res.error);
       const movies = res.body.Search;
       this.setState({movies});
      });
  }
  render(){
    return (
      <div className="App">
        <header>
        {
          this.state.movies.map((movie) => {
            return <Movie {...movie}/>
          })
        }
          <Search handleSendRequest={this.sendRequest}/>
        </header>
      </div>
    );
  }
}

export default App;

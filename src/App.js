import React, { Component } from "react";
import "./App.css";
import { Title } from "./components/Title";
import "bulma/css/bulma.css";
import SearchForm from "./components/SearchForm";
import { MovieList } from "./components/MovieList";

class App extends Component {
  state = { movies: [] };

  llenarPeliculas = results => {
    this.setState({ movies: results });
  };

  render() {
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this.llenarPeliculas} />
        </div>
        {this.state.movies.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          <MovieList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Title } from "../components/Title";
import SearchForm from "../components/SearchForm";
import { MovieList } from "../components/MovieList";

export class Home extends Component{
    state = { movies: [], usedSearch:false };

    llenarPeliculas = results => {
      this.setState({ movies: results, usedSearch:true });
    };
  
    _renderMovies(){
      return(
        this.state.movies.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          <MovieList movies={this.state.movies} />
        )
      )
    }

    render() {
        return (
          <div className="App">
            <Title>Buscador de Peliculas</Title>
            <div className="SearchForm-wrapper">
              <SearchForm onResults={this.llenarPeliculas} />
            </div>
            <br/>
            {
              this.state.usedSearch 
              ? this._renderMovies()
              : <p>Escriba la pelicula que desea buscar</p>
            }
          </div>
        );
}
}
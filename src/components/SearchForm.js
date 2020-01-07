import React, { Component } from "react";

const API_KEY = "57cf211b";

class SearchForm extends Component {
  state = { inputTitle: "" };

  sendForm = e => {
    e.preventDefault();
    const { inputTitle } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputTitle}`)
      .then(result => result.json())
      .then(data => {
        const { Search = [] } = data;
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this.sendForm}>
        <div className="field has-addons">
          <div className="control">
            <input
              value={this.state.title}
              className="input"
              type="text"
              placeholder="Ingrese la pelicula..."
              onChange={e => this.setState({ inputTitle: e.target.value })}
            />
          </div>
          <div className="control">
            <button className="button is-info">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;

import React, { Component } from "react"
import { BackButton } from "../components/BackButton";

const API_KEY = "57cf211b";

export class Detail extends Component {
    
    state = {movie:{}}
    _fecthMovie(id){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(result => result.json())
        .then(data => {
            this.setState({movie:data})
            console.log(this.state.movie)
        });
    }

    componentWillMount(){
        const {id} = this.props.match.params
        this._fecthMovie(id)
    }
    
    render(){
        const {Title,Actors,Awards,Language,Year,Runtime,Writer,imdbRating,Poster} = this.state.movie
        return(
            <>
                <BackButton/>
                         <div className="columns">
                <div className="column">
                    <img src={Poster} alt={Title}/>
                </div>
                <div className="column">
                    <h1 className="title">{Title}</h1>
        <span>{Year}</span> - <span>{Language}</span> - <span>{imdbRating}</span>
                    <h2>{Actors}</h2>
                    <p>{Awards}</p>
    <p>{Runtime} - {Writer}</p>
                </div>
            </div>
            </>
   
            
        )
    }
}
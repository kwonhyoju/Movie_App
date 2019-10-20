import React from 'react';
import axios from 'axios';
import Movies from './Movies.js'

class App extends React.Component{
    state ={
        isLoading:true,
        movies:[]
    }

    getMovies = async () => {
        const {data:{data:{movies}}} =await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({
            isLoading:false,
            movies
        });
    }

    componentDidMount(){
        this.getMovies();
    }


    render(){
        const {isLoading,movies}= this.state;
        return<div>
            {isLoading ? "loading....":movies.map( movies => {
                console.log(movies);
                return <Movies key={movies.id} id={movies.id} title={movies.title} year={movies.year} summary={movies.summary} poster={movies.medium_cover_image}/>
            })}
        </div>;
    }
}

export default App;

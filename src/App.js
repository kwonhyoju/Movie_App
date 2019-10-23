import React from 'react';
import axios from 'axios';
import Movies from './Movies.js'
import './App.css';
//  build 후 gh-pages 안되서 dev-tool에서 network확인 후 responce안오는 링크들 build된 폴더로 가서 링크 연결 다시함

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
        return<div className="container">
            {isLoading ? <div className="laodingWrap">
                <p>Loading...</p>
            </div>:(
                <div className="movies">
                    {movies.map( movies => {
                        console.log(movies);
                    return <Movies key={movies.id} title={movies.title} year={movies.year} summary={movies.summary} poster={movies.medium_cover_image}
                    genres={movies.genres}/>
                })}
                </div>
            )}
        </div>;
    }
}

export default App;

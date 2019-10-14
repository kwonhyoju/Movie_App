import React from 'react';
import axios from 'axios';

class App extends React.Component{
    state ={
        isLoading:true
    }

    getMovies = async()=>{
        const movie =await axios.get("https://yts-proxy.now.sh/list_movies.json");
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading}= this.state;
        return<div>
            {isLoading ? "loading....":"we are ready!"}
        </div>;
    }
}

export default App;

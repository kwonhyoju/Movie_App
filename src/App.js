import React from 'react';
// import propTypes from 'prop-types';

class App extends React.Component{
    state ={
        isLoading:true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false});
        },5000);
    }

    render(){
        const {isLoading}= this.state;
        return<div>
            {isLoading ? "loading....":"we are ready!"}
        </div>;
    }
}

export default App;

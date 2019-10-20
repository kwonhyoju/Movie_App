import React from 'react';
import ProtoTypes from "prop-types";

function Movies ({title,year,summary,poster,genres}){
    return <div className="movie">
        <img src={poster} title={title} alt={title}/>
        <div className="about_movie">
            <h3 className="movie_title">{title}</h3>
            <h4 className="movie_year">{year}</h4>
            <ul className ="movie_genres">
                {genres.map((gen,ind)=>{
                   return <li key={ind}>{gen}</li>
                })}
            </ul>
            <h5 className="movie_sumamry">{summary.slice(0,180)}...</h5>
        </div>
    </div>;
}

Movies.ProtoTypes= {
    title: ProtoTypes.string.isRequired,
    year: ProtoTypes.number.isRequired,
    summary:ProtoTypes.string.isRequired,
    poster:ProtoTypes.string.isRequired,
    genres:ProtoTypes.arrayOf(ProtoTypes.string).isRequired
};

export default Movies;
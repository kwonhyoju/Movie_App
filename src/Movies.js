import React from 'react';
import ProtoTypes from "prop-types";

function Movies ({id,title,year,summary,poster}){
    return <h4>{title}</h4>;
}

Movies.ProtoTypes= {
    id: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    year: ProtoTypes.number.isRequired,
    summary:ProtoTypes.string.isRequired,
    poster:ProtoTypes.string.isRequired
};

export default Movies;
import React from "react";
const MovieCard =({movie: {title, vote_average, poster_path, release_date, Original_language}}) =>{
    return (
        <div className="movie-card">
            <p className="text-white"> {title}

            </p>
        </div>
    )
}
export default MovieCard
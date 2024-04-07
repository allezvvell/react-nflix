import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';

const MovieCards = ({movie}) => {
console.log(movie);
  return (
    <div className='movie-card'
    style={{backgroundImage:`url('https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`}}>
     <div className='movie-info'>
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id,index) => {
           return <Badge bg='danger' key={index}>{id}</Badge>
        })}
        <div className='movie-info-two'>
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult?'over18':'under18'}</div>
        </div> 
     </div>
    </div>
  )
}

export default MovieCards

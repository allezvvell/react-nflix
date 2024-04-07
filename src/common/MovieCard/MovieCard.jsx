import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'
    style={{backgroundImage:`url('https://media.themoviedb.org/t/p/original${movie.poster_path}')`}}>
     <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        {movie.genre_ids.map((id,index) => {
           return <Badge bg='danger' key={index}>{id}</Badge>
        })}
        <div className='detail'>
            <div className='score'><FontAwesomeIcon icon={faStar} />{Math.round(movie.vote_average*10)/10}</div>
            <div className='popularity'><FontAwesomeIcon icon={faUserGroup} />{movie.popularity}</div>
        </div> 
     </div>
    </div>
  )
}

export default MovieCard

import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import image from '../../assets/noImage.jpg'
import { Link } from 'react-router-dom';



const MovieCard = ({movie}) => {
  const {data:genreData} = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if(!genreData){
      return []
    }
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((obj) => obj.id === id);
      return genreObj.name
    });
    return genreNameList
  }
  return (
    <div className='movie-card'
    style={{backgroundImage:movie.poster_path?`url('https://media.themoviedb.org/t/p/original${movie.poster_path}')`:`url('${image}')`}}>
      <Link to={`/movies/${movie.id}`}>
        <div className='movie-info'>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          {showGenre(movie.genre_ids).map((id,index) => {
            return <Badge bg='danger' key={index}>{id}</Badge>
          })}
          <div className='detail'>
              <div className='score'><FontAwesomeIcon icon={faStar} />{Math.round(movie.vote_average*10)/10}</div>
              <div className='popularity'><FontAwesomeIcon icon={faUserGroup} />{movie.popularity}</div>
          </div> 
      </div>
      </Link>
    </div>
  )
}

export default MovieCard

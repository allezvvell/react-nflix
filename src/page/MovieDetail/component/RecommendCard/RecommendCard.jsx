import React from 'react';
import noImage from '../../../../assets/noImage.jpg';
import './RecommendCard.css';
import { Link } from 'react-router-dom';


const RecommendCard = ({movie}) => {
  return (
    <div className='recommend-card' >
          <Link to={`/movies/${movie.id}`}>
            <div className='img-box'>{movie.backdrop_path? <img src={`https://media.themoviedb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/> : <img src={noImage} alt='영화이미지' />}</div>
            <div className='info-box'>
              <h3>{movie.title}</h3>
            </div>
          </Link>
    </div>
  )
}

export default RecommendCard

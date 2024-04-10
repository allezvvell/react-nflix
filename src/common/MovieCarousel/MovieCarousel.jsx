import React from 'react';
import './MovieCarousel.css';
import {Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MovieCarousel.css';

const MovieCarousel = ({movies,title,icon,responsive}) => {  
  return (
    <div className='carousel-wrap'>
        <Container><h2><FontAwesomeIcon icon={icon} /> {title}</h2></Container>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-carousel'
            containerClass='carousel-container'
            responsive={responsive}
        >
        {movies?.map((movie,index) => <MovieCard movie={movie} key={index}/>)}  
        </Carousel>
    </div>
  )
}

export default MovieCarousel

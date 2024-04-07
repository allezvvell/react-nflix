import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieCards from '../MovieCard/MovieCards';

const PopularMoviesCarousel = () => {
    const {data,isLoading,isError,error} = usePopularMoviesQuery();
    const responsive = {
        desktop: {
            breakpoint: { min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
        };
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <p>{error.message}</p>
  }        
  return (
    <div>
        <h2>Popular Movies</h2>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-carousel p-1'
            containerClass='carousel-container'
            responsive={responsive}
        >
        {data?.results.map((movie,index) => <div key={index}><MovieCards movie={movie}/></div>)}  
        </Carousel>
    </div>
  )
}

export default PopularMoviesCarousel

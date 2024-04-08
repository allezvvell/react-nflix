import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/useMovies'
import { faFire } from '@fortawesome/free-solid-svg-icons';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';
import { responsive } from '../../../../constants/responsive';


const PopularMoviesCarousel = () => {
  const {data,isLoading,isError,error} = usePopularMoviesQuery();
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <p>{error.message}</p>
  }        
  return (
    <section id='popular-movies'>
      <MovieCarousel 
        movies={data.results} 
        title='Popular Movies' 
        icon={faFire} 
        responsive={responsive}/>
    </section>
  )
}

export default PopularMoviesCarousel

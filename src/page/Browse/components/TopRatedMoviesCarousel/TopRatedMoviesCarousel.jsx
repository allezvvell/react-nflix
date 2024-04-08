import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useMovies';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';
import { responsive } from '../../../../constants/responsive';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';



const TopRatedMoviesCarousel = () => {
  const {data,isLoading,isError,error} = useTopRatedMoviesQuery();

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <p>{error.message}</p>
  }
  return (
    <section id='top-rated-movies'>
      <MovieCarousel
        movies={data.results}
        title='Top Rated Movies'
        icon={faStarHalfStroke}
        responsive={responsive}
      />      
    </section>
  )
}

export default TopRatedMoviesCarousel

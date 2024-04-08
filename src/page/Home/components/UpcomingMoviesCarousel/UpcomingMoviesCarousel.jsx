import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useMovies'
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';
import { responsive } from '../../../../constants/responsive';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const UpcomingMoviesCarousel = () => {
  const {data,isLoading,isError,error} = useUpcomingMoviesQuery();

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <p>{error.message}</p>
  }
  return (
    <section id='upcoming-movies'>
        <MovieCarousel 
            movies={data.results}
            title='Upcoming Movies'
            responsive={responsive}
            icon={faCalendar}
        />
    </section>
  )
}

export default UpcomingMoviesCarousel

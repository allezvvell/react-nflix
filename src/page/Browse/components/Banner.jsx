import React from 'react';
import { usePopularMoviesQuery } from '../../../hooks/usePopularMovies';
import './Banner.css'

const Banner = () => {
  const {data,isLoading,isError,error} = usePopularMoviesQuery();
  console.log(data);

  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>{error.message}</div>
  }
  return (
    <div className='banner' style={{backgroundImage:`url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].backdrop_path}')`}}>
    </div>
  )
}

export default Banner

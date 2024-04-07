import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Bars } from 'react-loader-spinner';
import './Banner.css';
import { Container } from 'react-bootstrap'
 

const Banner = () => {
  const {data,isLoading,isError,error} = usePopularMoviesQuery();

  if(isLoading){
    return<div className='loader-area'>
      <Bars
        height="60"
        width="60"
        color="rgba(255,255,255,0.7)"
        ariaLabel="bars-loading"
        wrapperClass="loader-wrap"
        visible={true}
        />
    </div>
  }
  if(isError){
    return <div>{error.message}</div>
  }
  return (
    <div className='banner' style={{backgroundImage:`url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}')`}}>
      <Container>
        <div className='text-white text-area'>
          <h2>{data?.results[0].title}</h2>
          <p>{data?.results[0].overview}</p>
        </div>
      </Container>
    </div>
  )
}

export default Banner

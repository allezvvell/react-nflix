import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Bars } from 'react-loader-spinner';
import './Banner.css';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    autoplay:true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const {data,isLoading,isError,error} = usePopularMoviesQuery();
  const movieList = data?.results.slice(0,4);
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
    <Slider {...settings} className='slick-slider-wrap'>
      {movieList.map((movie,index)=> {
        return <div className='slick-item' key={index}>
        <div style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}}>
          <Container>
            <div className='txt-box'>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </Container>
        </div>
      </div>
      })}
    </Slider>
);
}

export default Banner

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
      <div className='slick-item'>
        <div style={{color:'#fff',backgroundImage:`url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}')`}}>
          <Container>
            <div className='txt-box'>
              <h2>{data?.results[0].title}</h2>
              <p>{data?.results[0].overview}</p>
            </div>
          </Container>
        </div>
      </div>
      <div className='slick-item'>
        <div style={{color:'#fff',backgroundImage:`url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[1].backdrop_path}')`}}>
          <Container>
            <div className='txt-box'>
              <h2>{data?.results[1].title}</h2>
              <p>{data?.results[1].overview}</p>
            </div>
          </Container>
        </div>
      </div>
      <div className='slick-item'>
        <div style={{color:'#fff',backgroundImage:`url('https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[2].backdrop_path}')`}}>
          <Container>
            <div className='txt-box'>
              <h2>{data?.results[2].title}</h2>
              <p>{data?.results[2].overview}</p>
            </div>
          </Container>
        </div>
      </div>
    </Slider>
);
}

export default Banner

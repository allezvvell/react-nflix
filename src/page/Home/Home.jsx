import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMoviesCarousel from './components/PopularMoviesCarousel/PopularMoviesCarousel';
import TopRatedMoviesCarousel from './components/TopRatedMoviesCarousel/TopRatedMoviesCarousel';
import UpcomingMoviesCarousel from './components/UpcomingMoviesCarousel/UpcomingMoviesCarousel';
import Footer from '../../common/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesCarousel />
      <TopRatedMoviesCarousel />
      <UpcomingMoviesCarousel /> 
      <Footer />
    </div>
  )
}

export default Home

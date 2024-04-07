import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMoviesCarousel from './components/PopularMoviesCarousel/PopularMoviesCarousel';


// 1. 배너 => popular 영화의 첫번째 아이템을 보여주자
// 2. popular movies
// 3. top rated movie
// 4. upcoming movie 

const Browse = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesCarousel />
    </div>
  )
}

export default Browse

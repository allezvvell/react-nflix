import React from 'react';
import { useMovieReviewQuery } from '../../../../hooks/useMovieDetail';
import ReviewBox from '../ReviewBox/ReviewBox';


const MovieReview = ({id}) => {
    const {data} = useMovieReviewQuery(id);
  if(data?.results.length === 0){
    return <div>결과가 없습니다.</div>
  }
  return (
    <div>
      {data?.results.map((review,index)=><ReviewBox review={review} key={index}/>)}
    </div>
  )
}

export default MovieReview

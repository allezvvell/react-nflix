import React from 'react'
import { useMovieRecommendQuery } from '../../../../hooks/useMovieDetail';
import RecommendCard from '../RecommendCard/RecommendCard';
import { Row, Col } from 'react-bootstrap'



const MovieRecommand = ({id}) => {
  const {data} = useMovieRecommendQuery(id);
  if(data?.results.length === 0){
    return <div>결과가 없습니다.</div>
  }
  return (
    <div>
      <Row>
        {data?.results.map((movie,index)=><Col key={index} lg={6}><RecommendCard movie={movie}/></Col>)}
      </Row>
    </div>
  )
}

export default MovieRecommand

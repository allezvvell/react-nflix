import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovies';
import { Bars } from 'react-loader-spinner';
import Alert from 'react-bootstrap/Alert';
import noImage from '../../assets/noImage.jpg';
import './MovieDetail.css';
import { Container,Row,Col } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

const MovieDetail = () => {
  const {id} = useParams();
  const {data,isLoading,isError,error} = useMovieDetailQuery(id);
  const genreList = data?.genres.map((obj)=>obj.name); 
  console.log(data);
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
      return  <Alert variant={'light'}>{error.message}</Alert>
  }
  return (
    <div className='detail-wrap'>
      <div 
        className='bg-top' 
        style={{backgroundImage:data.backdrop_path?`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`:`url(${noImage})`}}>
          <div className='tagline'>{ data.tagline&&`"${data.tagline}"`}</div>
        </div>
      <div className='detail-content'>
        <div className='detail-box'>
          <Container>
            <Row>
              <Col lg={6} className='poster-col'>
                <div 
                  className='poster-img' 
                  style={{backgroundImage:data.poster_path?`url(https://image.tmdb.org/t/p/original${data.poster_path})`:`url(${noImage})`}}></div>
              </Col>
              <Col lg={6}>
                <div className='desc'>
                  <div>{genreList.map((genre,index) => <Badge bg='danger' key={index}>{genre}</Badge>)}</div>
                  <h2>{data.title}</h2>
                  <h3>{data.original_title}</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail

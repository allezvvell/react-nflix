import React from 'react';
import './Movies.css';
import { useSearchParams } from 'react-router-dom';
import { useSearchMoviesQuery } from '../../hooks/useSearchMovies';
import { Bars } from 'react-loader-spinner';
import { Container,Row,Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import Footer from '../../common/Footer/Footer';


const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const {data,isLoading,isError,error} = useSearchMoviesQuery(query);
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
    <div>
      <Container className='movies-wrap'>
        <Row>
          <Col lg={4} xs={12}>필터</Col>
          <Col lg={8} xs={12}>
            <Row>
            {data?.results.map((movie,index)=><Col key={index} lg={4} md={6} xs={12}><MovieCard movie={movie}/></Col>)}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
)}

export default Movies

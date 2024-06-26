import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovies';
import { Bars } from 'react-loader-spinner';
import Alert from 'react-bootstrap/Alert';
import noImage from '../../assets/noImage.jpg';
import './MovieDetail.css';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MovieReview from './component/MovieReview/MovieReview';
import MovieRecommand from './component/MovieRecommend/MovieRecommand';
import Footer from '../../common/Footer/Footer'
import MovieVideo from './component/MovieVideo/MovieVideo';
import MovieCast from './component/MovieCast/MovieCast';



const MovieDetail = () => {
  const {id} = useParams();
  const {data,isLoading,isError,error} = useMovieDetailQuery(id);
  const [show,setShow] = useState(false);
  const genreList = data?.genres.map((obj)=>obj.name); 
  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }
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
          <Container><div className='tagline'>{ data.tagline&&`"${data.tagline}"`}</div></Container>
      </div>
      <div className='detail-content'>
        <div className='detail-box'>
          <Container>
            <Row>
              <Col lg={6} className='poster-col'>
                {data.poster_path?<img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title}/>:noImage}
              </Col>
              <Col lg={6}>
                <div className='desc'>
                  <div className='genre'>{genreList.map((genre,index) => <Badge bg='danger' key={index}>{genre}</Badge>)}</div>
                  <h2>{data.title}</h2>
                  <h3>{data.original_title}</h3>
                  <ul className='top-list'>
                    <li className='vote-average'><FontAwesomeIcon icon={faStar} />{Math.round(data.vote_average*10)/10}</li>
                    <li className='popularity'><FontAwesomeIcon icon={faUserGroup} />{data.popularity}</li>
                    <li className=''><Button variant='light' onClick={showModal}><FontAwesomeIcon icon={faPlay} /> 관련영상</Button></li>
                  </ul>
                  <div className='overview'>{data.overview}</div>
                  <ul className='bottom-list'>
                    <li><Badge bg='danger'>개봉일</Badge>{data.release_date}</li>
                    <li><Badge bg='danger'>러닝타임</Badge>{data.runtime}분</li>
                    <li><Badge bg='danger'>전체예산</Badge>${data.budget}</li>
                    <li><Badge bg='danger'>수익</Badge>${data.revenue}</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* //detail-box */}
        <MovieVideo show={show} closeModal={closeModal} id={id}/>
        {/* //Video Modal */}
        <MovieCast id={id}/>
        {/* // movie cast */}
        <div className='detail-tap-box'>
          <Container>
            <Tabs
            defaultActiveKey="review"
            transition={false}
            id="detail-tab"
            className="mb-3"
            >
              <Tab eventKey="review" title={`리뷰`}>
                <MovieReview id={id}/>
              </Tab>
              <Tab eventKey="profile" title="관련영화">
                <MovieRecommand id={id}/>
              </Tab>
            </Tabs>
          </Container>
        </div>
        {/* //detail-tab-box */}
      </div>
      {/* //detail-content */}
      <Footer />
    </div>
  )
}

export default MovieDetail

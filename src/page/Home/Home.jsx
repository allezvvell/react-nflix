import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import  { useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/mainSlice';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';





const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToBrowse = (e) => {
    e.preventDefault();
    dispatch(setIsLogin());
    navigate('/browse');
  }
  const focusEvent = (e) => {
    if(e.target.value !== ''){
      e.target.classList.add('on')
    }else{
      e.target.classList.remove('on');
    }
  }
  return (
    <div>
      <header id='header'>
        <div className='header'>
          <Container>
            <h1>
                <Link to='/'>
                  <img src='./assets/logo.png' alt='넷플릭스'/>
                </Link>
              </h1>
          </Container>
        </div>          
      </header>
      {/* //header */}
      <section id='main-banner'>
        <div className='main-banner'>
          <div className='content-wrap'>
            <Container>
              <div className='intro'>
                <h2>영화, 시리즈 등을 무제한으로</h2>
                <p>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</p>
                <div className='form-wrap'>
                  <form action='/' onSubmit={goToBrowse} id='login-form'>
                    <div className='input-box'>
                      <input type='email' required id='login-input' onChange={focusEvent}/>
                      <label htmlFor='login-input'>이메일 주소</label>
                    </div>
                    <button type='submit'>시작하기<FontAwesomeIcon icon={faChevronRight} /></button>
                  </form>
                </div>
              </div>
            </Container>
            <div className='cover'></div>
          </div>
          <div className='bg-wrap'><img src='./assets/bg_main.jpg' alt='배경이미지'/></div>
        </div>
      </section>
      {/* //main-banner */}
      <section id='membership'>
        <div className='membership'>
          <Container>
            <div className='img-box'>
              <img src='./assets/popcorn.png' alt='팝콘이미지'/>
            </div>
            <div className='text-box'>
              <h2>5500원이면 만날 수 있는 넷플릭스.</h2>
              <p>광고형 스탠다드 멤버십에 가입하세요.</p>
              <a href='https://netflix-allezvvell.netlify.app/'>자세히 알아보기 <FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </Container>
        </div>
      </section>
      {/* //membership */}
      <section id='devices'>
        <div className='devices'>
          <Container>
            <Row>
              <Col lg={6} className='col1'>
                <h2>TV로 즐기세요</h2>
                <p>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
              </Col>
              <Col lg={6} className='col2'>
                <div className='media-wrap'>
                  <div className='img-box'><img src='./assets/tv1.png' alt='배경이미지'/></div>
                  <div className='video-box'><video autoPlay playsInline muted loop><source src='./assets/video1.m4v'></source></video></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* //devices */}
    </div>
  )
}

export default Home

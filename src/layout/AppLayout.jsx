import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './AppLayout.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppLayout = () => {
  const [buttonClicked,setButtonClicked] = useState(false);
  const searchEvent = (e) => {
    e.preventDefault();
    const frm = e.target.parentElement;
    if(!buttonClicked){
      setButtonClicked(true);
      frm.classList.add('active')
    }else{
      setButtonClicked(false);
      frm.classList.remove('active')
    }
  }
  return <div>
   <header>
    <Container>
      <h1><Link to='/browse'><img src='./assets/logo.png' alt='넷플릭스'/></Link></h1>
      <nav>
        <span>메뉴</span>
        <ul>
          <li><Link to='/browse'>Home</Link></li>
          <li><Link to='/browse/movies'>Movies</Link></li>
          <li><Link>TV</Link></li>
        </ul>
      </nav>
      <div className='search-box'>
        <form>
          <button onClick={searchEvent}></button>
          <div className='input-box'><input type='text' placeholder='제목,사람,장르'/></div>
        </form>
      </div>
    </Container>
   </header>
   <Outlet />  
  </div>
}

export default AppLayout

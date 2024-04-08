import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import './AppLayout.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const AppLayout = () => {
  const [buttonClicked,setButtonClicked] = useState(false);
  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate();
  const searchBarEvent = (e) => {
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
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  }
  return <div>
   <header>
    <Container>
      <h1><Link to='/'><img src='./assets/logo.png' alt='넷플릭스'/></Link></h1>
      <nav>
        <span>메뉴</span>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
        </ul>
      </nav>
      <div className='search-box'>
        <form action='/' onSubmit={searchByKeyword}>
          <button onClick={searchBarEvent} type='button'></button>
          <div className='input-box'>
            <input 
              type='text' 
              value={keyword}
              onChange={(e) =>{setKeyword(e.target.value)}} 
              placeholder='search'/>
          </div>
        </form>
      </div>
    </Container>
   </header>
   <Outlet />  
  </div>
}

export default AppLayout

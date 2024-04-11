import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import './AppLayout.css';
import { Container } from 'react-bootstrap';
import { Navbar,Nav,Form,Button } from 'react-bootstrap';
import logo from '../assets/logo.png'



const AppLayout = () => {
  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate();
 
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  }
  const moveToTarget = (event,target) => {
    event.preventDefault();
    navigate(target);
  }
  return <div>
   <header>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" onClick={(e)=>moveToTarget(e,'/')}><img src={logo} alt='엔플릭스'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" onClick={(e)=>moveToTarget(e,'/')}>Home</Nav.Link>
            <Nav.Link href="#" onClick={(e)=>moveToTarget(e,'/movies')}>Movies</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setKeyword(e.target.value)}
            />
            <Button variant="danger" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
   <Outlet />  
  </div>
}

export default AppLayout

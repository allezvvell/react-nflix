import React, { useEffect, useState } from 'react';
import './Movies.css';
import { useSearchParams } from 'react-router-dom';
import { useSearchMoviesQuery } from '../../hooks/useSearchMovies';
import { Bars } from 'react-loader-spinner';
import { Container,Row,Col } from 'react-bootstrap';
import Footer from '../../common/Footer/Footer';
import ReactPaginate from "react-paginate";
import SearchMovieCard from './component/SearchMovieCard/SearchMovieCard';
import Alert from 'react-bootstrap/Alert';
import FilterMenu from './component/FilterMenu/FilterMenu';


const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [page, setPage] = useState(1);
  const {data,isLoading,isError,error} = useSearchMoviesQuery(query,page);
  const [movieList,setMovieList] = useState([]);
  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  }
  useEffect(()=>{
    setMovieList(data?.results);
  },[data])
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
    <div>
      <Container className='movies-wrap'>
        <Row>
          <Col lg={4} xs={12}>
            <FilterMenu setMovieList={setMovieList} initialMovieList={data.results}/>
          </Col>
          <Col lg={8} xs={12}>
            <Row>
            {movieList?.length!==0 ? movieList?.map((movie,index)=><Col key={index} lg={4} md={6} xs={12}><SearchMovieCard movie={movie}/></Col>)
             : <div className='no-result-wrap'>검색결과가 존재하지 않습니다.</div>
            }
            </Row>
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages}
                forcePage={page - 1}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
)}

export default Movies

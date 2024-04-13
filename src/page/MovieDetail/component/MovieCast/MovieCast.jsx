import React from 'react';
import { useMovieCreditsQuery } from '../../../../hooks/useMovieDetail';
import { Container, Row, Col } from 'react-bootstrap';
import './MovieCast.css'

const MovieCast = ({id}) => {
  const {data:creditData} = useMovieCreditsQuery(id);
  return (
    <div className='movie-cast-wrap'>
      <Container>
        <h3>출연배우</h3>
        <Row>
            {creditData?.cast? 
            (creditData?.cast.slice(0,6).map((actor,index) => {
                return <Col key={index} lg={2} md={3}>
                    <div className='cast-box'>
                        <img src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`}/>
                        <div className='txt-box'>
                            <span>{actor.name}</span>
                            <p>{actor.character}</p>
                        </div>
                    </div>
                </Col>
            }))
            :(
                <div className='no-cast-wrap'>정보가 없습니다.</div>
            ) 
            }
        </Row>
      </Container>
    </div>  
  )
}

export default MovieCast

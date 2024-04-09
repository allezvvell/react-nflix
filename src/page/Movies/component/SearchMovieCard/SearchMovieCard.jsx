import React from 'react';
import './SearchMovieCard.css';
import image from '../../../../assets/noImage.jpg';
import { Link } from 'react-router-dom';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { Badge } from 'react-bootstrap';




const SearchMovieCard = ({movie}) => {
  const {data:genreData} = useMovieGenreQuery();
  const getGenreList = (idList) => {
    if(!genreData){
        return []
    }
    const nameList = idList.map((id) => {
        const genreObj = genreData.find((obj)=>obj.id === id);
        return genreObj.name
    })
    return nameList
  }
  return (
    <Link to={`/movies/${movie.id}`}>
        <div 
            className='search-movie-card'
            style={{backgroundImage:movie.poster_path?`url('https://media.themoviedb.org/t/p/original${movie.poster_path}')`:`url('${image}')`}}
            >
            <div className='desc-wrap'>
                <img src={`https://media.themoviedb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
                <span className='title'>{movie.title}</span>
                <div>{getGenreList(movie.genre_ids).map((name,index)=>{return <Badge bg='danger' key={index}>{name}</Badge>})}</div>
                <span className='go-detail'>상세 페이지</span>
            </div>
        </div>
    </Link>
  )
}

export default SearchMovieCard

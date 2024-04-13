import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import './FilterMenu.css'


const FilterMenu = ({setMovieList,initialMovieList}) => {
    const {data:genreList} = useMovieGenreQuery();
    const [sortName,setSortName] = useState('정렬');
    const [filterName,setFilterName] = useState('장르별 보기');
    const [activeBtn,setActiveBtn] = useState(null);
    const sortMovieList = (e,sortBy) => {
        e.preventDefault();
        console.log(e.target);
        const newMovieList = [...initialMovieList];
        switch(sortBy){
            case '인기 높은순':
                newMovieList.sort((a,b) => b.popularity - a.popularity);
                break;
            case '인기 낮은순':
                newMovieList.sort((a,b) => a.popularity - b.popularity); 
                break;
            case '평점 높은순' :
                newMovieList.sort((a,b) => b.vote_average - a.vote_average);
                break;
            case '평점 낮은순' :
                newMovieList.sort((a,b) => a.vote_average - b.vote_average);
                break; 
            default:
                newMovieList.sort((a,b) => b.title-a.title);            
        }
        setMovieList(newMovieList);
        setSortName(sortBy);
    }
    const filterMovieList = (e,genreId,genreName) => {
        e.preventDefault();
        setActiveBtn(genreId);
        const newMovieList = [...initialMovieList];
        const filteredMovieList = newMovieList.filter((movie) => movie.genre_ids.includes(genreId));
        setMovieList(filteredMovieList);
        setFilterName(genreName);
    }
  return (
    <div>
        <Dropdown className='sort-drop-down'>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {sortName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'인기 높은순')}>인기 높은순</Dropdown.Item>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'인기 낮은순')}>인기 낮은순</Dropdown.Item>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'평점 높은순')}>평점 높은순</Dropdown.Item>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'평점 낮은순')}>평점 낮은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='genre-drop-down'>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                {filterName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {genreList?.map((genre,index) => {
                    return <Dropdown.Item 
                            key={index} 
                            href='#'
                            onClick={e => filterMovieList(e,genre.id,genre.name)}>{genre.name}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
        <div className='genre-badge-wrap'>
            {genreList?.map((genre,index) => {
                return <Badge 
                        bg='light'
                        key={index} 
                        className={activeBtn===genre.id ? 'active':''}
                        onClick={e => filterMovieList(e,genre.id,genre.name)}>{genre.name}</Badge>
            })}
        </div>

    </div>
  )
}

export default FilterMenu

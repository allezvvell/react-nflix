import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';


const FilterMenu = ({setMovieList,initialMovieList}) => {
    const {data:genreList} = useMovieGenreQuery();
    const [filterName,setFilterName] = useState('장르별 보기')
    const sortMovieList = (e,sortBy) => {
        e.preventDefault();
        const newMovieList = [...initialMovieList];
        switch(sortBy){
            case 'popularityDesc':
                newMovieList.sort((a,b) => b.popularity - a.popularity);
                break;
            case 'popularityAsc':
                newMovieList.sort((a,b) => a.popularity - b.popularity); 
                break;
            case 'scoreDesc' :
                newMovieList.sort((a,b) => b.vote_average - a.vote_average);
                break;
            //case 'scoreAsc' :
            default:
                newMovieList.sort((a,b) => a.vote_average - b.vote_average);
                break;         
        }
        setMovieList(newMovieList);
    }
    const filterMovieList = (e,genreId,genreName) => {
        e.preventDefault();
        const newMovieList = [...initialMovieList];
        const filteredMovieList = newMovieList.filter((movie) => movie.genre_ids.includes(genreId));
        setMovieList(filteredMovieList);
        setFilterName(genreName);

    }
  return (
    <div>
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {'인기순 정렬'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'popularityDesc')}>인기 높은순</Dropdown.Item>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'popularityAsc')}>인기 낮은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {'평점순 정렬'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'scoreDesc')}>평점 높은순</Dropdown.Item>
            <Dropdown.Item href="#" onClick={e => sortMovieList(e,'scoreAsc')}>평점 낮은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {filterName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {genreList?.map((genre,index) => {
                    return <Dropdown.Item 
                            key={index} 
                            href="#" 
                            onClick={e => filterMovieList(e,genre.id,genre.name)}>{genre.name}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default FilterMenu

import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchedMovies = (keyword,page,sort) => {
    // return keyword?
    // api.get(`search/movie?query=${keyword}&page=${page}&sort_by=${sort}`)
    // :api.get(`movie/popular?page=${page}&sort_by=${sort}`)

    if(keyword){
        return api.get(`search/movie?query=${keyword}&page=${page}&sort_by=${sort}&language=ko-KR&`)
    }else{
        return api.get(`discover/movie?page=${page}&sort_by=${sort}&language=ko-KR`)
    }
}

export const useSearchMoviesQuery = (query,page,sort) => {
    return useQuery({
        queryKey:['movie-search',query,page,sort],
        queryFn:()=>fetchSearchedMovies(query,page,sort),
        select:(result) => result.data
    })
}
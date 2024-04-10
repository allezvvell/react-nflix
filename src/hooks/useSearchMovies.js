import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchedMovies = (keyword,page) => {
    return keyword?
    api.get(`search/movie?query=${keyword}&page=${page}&language=ko-KR`)
    :api.get(`movie/popular?page=${page}&language=ko-KR`)
}

export const useSearchMoviesQuery = (query,page) => {
    return useQuery({
        queryKey:['movie-search',query,page],
        queryFn:()=>fetchSearchedMovies(query,page),
        select:(result) => result.data
    })
}
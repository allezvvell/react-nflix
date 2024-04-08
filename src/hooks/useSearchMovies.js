import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchedMovies = (keyword) => {
    return keyword?
    api.get(`search/movie?query=${keyword}`)
    :api.get(`movie/popular`)
}

export const useSearchMoviesQuery = (query) => {
    return useQuery({
        queryKey:['movie-search',query],
        queryFn:()=>fetchSearchedMovies(query),
        select:(result) => result.data
    })
}
import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovies = (url) => {
    return api.get(url)
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-popular'],
        queryFn: () => fetchMovies('movie/popular?language=ko-KR'),
        select:result=>result.data
    })
}


export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-top-rated'],
        queryFn:() => fetchMovies('movie/top_rated?language=ko-KR'),
        select:result=>result.data
    })
}

export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:() => fetchMovies('movie/upcoming?language=ko-KR'),
        select:result=>result.data
    })
}

export const useMovieDetailQuery = (id) => {
    return useQuery({
        queryKey:['movie-detail',id],
        queryFn:() => fetchMovies(`movie/${id}?language=ko-KR`) ,
        select:(result) => result.data
    })
}
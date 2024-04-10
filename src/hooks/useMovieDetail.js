import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';



const fetchMovieDetail = (restUrl) => {
   return api.get(`movie/${restUrl}`)
}

export const useMovieReviewQuery = (id) => {
    return useQuery({
        queryKey:['movie-review',id],
        queryFn:()=>fetchMovieDetail(`${id}/reviews`),
        select:(result) => result.data
    })
}

export const useMovieRecommendQuery = (id) => {
    return useQuery({
        queryKey:['movie-recommend',id],
        queryFn:()=>fetchMovieDetail(`${id}/recommendations?language=ko-KR`),
        select:(result) => result.data
    })
}

export const useMovieVideoQuery = (id) => {
    return useQuery({
        queryKey:['movie-video',id],
        queryFn:()=>fetchMovieDetail(`${id}/videos`),
        select:(result) => result.data
    })
}
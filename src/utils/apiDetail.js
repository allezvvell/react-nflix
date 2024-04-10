import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY;
const apiDetail = axios.create({
    baseURL:'https://developers.themoviedb.org/3/movies',
    headers:{
        Accept:'application/json',
        Authorization : `Bearer ${API_KEY}`
    }
});


export default apiDetail
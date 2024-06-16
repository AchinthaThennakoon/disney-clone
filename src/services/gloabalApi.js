import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "fa6a156b8b7f81648a0540fb0adac599";
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


const getTrendingMovies = axios.get(movieBaseUrl + "trending/all/day?api_key=" + api_key);

const getMoviesByGenreId = (id) => {
    return axios.get(movieByGenreBaseURL + "&with_genres=" + id)
};


export default {
    getTrendingMovies,
    getMoviesByGenreId
}
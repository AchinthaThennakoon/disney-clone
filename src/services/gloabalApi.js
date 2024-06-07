import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "fa6a156b8b7f81648a0540fb0adac599";

const getTrendingMovies = axios.get(this.movieBaseUrl + "/trending/all/day?api_key" + this.api_key);

export default {
    getTrendingMovies
}
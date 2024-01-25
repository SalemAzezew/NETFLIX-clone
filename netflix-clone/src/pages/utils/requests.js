const API_KEY = process.env.REACT_APP_API_KEY;
const requsts = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOrginals:`/discover/tv?api-key=${API_KEY}&whith_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocmonteries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-us&page=1`
};

export default requsts;
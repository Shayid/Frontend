import React from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";
import axios from "axios";

function TopRatedMovie(props) {
	const [movies, setMovies] = useState([]);
	const API_KEY = process.env.REACT_APP_API_KEY;
	const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

	// get top rated movie TMDB
	async function getTopRatedgMovie() {
		const response = await axios(URL);
		setMovies(response.data.results);
	}

	// call getNowPlayMovie in useEffect
	useEffect(() => {
		getTopRatedgMovie();
	}, []);

	return (
		<>
			<Hero />
			<Movies movies={movies} heading="Top Rated Movies" />
		</>
	);
}

export default TopRatedMovie;

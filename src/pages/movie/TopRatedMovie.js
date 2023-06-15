import React from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function TopRatedMovie() {
	const [movies, setMovies] = useState([]);

	// get top rated movie TMDB
	async function getTopRatedgMovie() {
		const response = await axios(ENDPOINTS.TOPRATED);
		setMovies(response.data.results);
	}

	// call getNowPlayMovie in useEffect
	useEffect(() => {
		getTopRatedgMovie();
	}, []);

	return (
		<>
			<Hero />
			<Movies movies={movies} title="Top Rated Movies" />
		</>
	);
}

export default TopRatedMovie;

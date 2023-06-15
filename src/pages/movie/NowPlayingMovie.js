import React from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function NowPlayingMovie() {
	const [movies, setMovies] = useState([]);

	// get now playing movie TMDB
	async function getNowPlayingMovie() {
		const response = await axios(ENDPOINTS.NOWPLAYING);
		setMovies(response.data.results);
	}

	// call getNowPlayMovie in useEffect
	useEffect(() => {
		getNowPlayingMovie();
	}, []);

	return (
		<>
			{/* <h2>Now Playing Movie</h2> */}
			<Hero />
			<Movies movies={movies} title="Now Playing Movies" />
		</>
	);
}

export default NowPlayingMovie;

import React from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";
import axios from "axios";

function NowPlayingMovie() {
	const [movies, setMovies] = useState([]);
	const API_KEY = process.env.REACT_APP_API_KEY;
	const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

	// get now playing movie TMDB
	async function getNowPlayingMovie() {
		const response = await axios(URL);
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
			<Movies movies={movies} heading="Now Playing Movies" />
		</>
	);
}

export default NowPlayingMovie;

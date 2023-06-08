import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function PopulerMovie() {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;
	const [movies, setMovies] = useState([]);

	const getPopularMovies = async () => {
		const response = await axios(URL);
		setMovies(response.data.results);
	};

	useEffect(() => {
		getPopularMovies();
		console.log(movies);
	}, []);

	return (
		<>
			<Hero />
			<Movies movies={movies} heading="Popular Movies" />
		</>
	);
}

export default PopulerMovie;

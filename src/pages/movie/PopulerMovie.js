import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function PopulerMovie() {
	const [movies, setMovies] = useState([]);
	const getPopularMovies = async () => {
		const response = await axios(ENDPOINTS.POPULAR);
		setMovies(response.data.results);
	};

	useEffect(() => {
		getPopularMovies();
		console.log(movies);
	}, []);

	return (
		<>
			<Hero />
			<Movies movies={movies} title="Popular Movies" />
		</>
	);
}

export default PopulerMovie;

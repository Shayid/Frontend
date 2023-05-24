import React, { useState } from "react";
// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../components/utils/constants/data";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
	const [movies, setMovies] = useState(data);
	return (
		<main>
			<Hero />
			<Movies movies={[movies, setMovies]} />
			<AddMovieForm movies={[movies, setMovies]} />
		</main>
	);
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
	return (
		<>
			<Main />
		</>
	);
}

export default Home;

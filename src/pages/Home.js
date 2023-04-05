import React from "react";
// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
const Main = () => {
	return (
		<main>
			<Hero />
			<Movies />
		</main>
	);
};

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
const Home = () => {
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
};

export default Home;

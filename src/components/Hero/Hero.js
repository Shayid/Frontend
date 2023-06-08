import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import {
	StyledContainer,
	StyledHero,
	StyledHeroDescription,
	StyledHeroGenre,
	StyledHeroImage,
	StyledHeroLeft,
	StyledHeroLoader,
	StyledHeroRight,
	StyledHeroTitle,
} from "../ui/Hero";

function Hero() {
	const [movie, setMovie] = useState("");
	const API_KEY = process.env.REACT_APP_API_KEY;
	const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
	const idTrailer = movie && movie.videos.results[0].key;

	// Mengambil 1 data dari tranding movie.
	async function getTrendingMovies() {
		const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
		const response = await axios(URL);
		console.log(response.data.results[0]);
		return response.data.results[0];
	}

	// Membuat fungsi getDetailMovie: Mengambil detail movie berdasarkan id
	async function getDetailMovie() {
		const trendingMovie = await getTrendingMovies();
		const id = trendingMovie.id;
		// Fetch detail movie berdasarkan id
		const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
		const response = await axios(URL);
		//update data movie dari axios ke state movie
		setMovie(response.data);
	}

	useEffect(() => {
		getDetailMovie();
	}, []);

	return (
		<StyledContainer>
			{movie ? (
				<StyledHero>
					<StyledHeroLeft>
						<StyledHeroTitle>{movie.title}</StyledHeroTitle>
						<StyledHeroGenre>Genre: {genres}</StyledHeroGenre>
						<StyledHeroDescription>{movie.overview}</StyledHeroDescription>
						<Button
							variant="primary"
							size="lg"
							as="a"
							href={`https://www.youtube.com/watch?v=${idTrailer}`}
						>
							Watch
						</Button>
					</StyledHeroLeft>
					<StyledHeroRight>
						<StyledHeroImage
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={`Poster ${movie.title}`}
						/>
					</StyledHeroRight>
				</StyledHero>
			) : (
				<StyledHeroLoader>
					<StyledHeroImage
						src={
							"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
						}
						alt={`loader`}
					/>
				</StyledHeroLoader>
			)}
		</StyledContainer>
	);
}

export default Hero;

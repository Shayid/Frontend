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

	async function fetchMovie(delay = true, timerDelayEffect = 500) {
		const URL = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
		const response = await fetch(URL);
		const data = await response.json();
		!delay
			? setMovie(data)
			: setTimeout(() => setMovie(data), timerDelayEffect);
	}

	useEffect(() => {
		fetchMovie();
	}, []);

	return (
		<StyledContainer>
			{movie ? (
				<StyledHero>
					<StyledHeroLeft>
						<StyledHeroTitle>{movie.Title}</StyledHeroTitle>
						<StyledHeroGenre>Genre: {movie.Genre}</StyledHeroGenre>
						<StyledHeroDescription>{movie.Plot}</StyledHeroDescription>
						<Button variant="primary" size="lg">
							Watch
						</Button>
					</StyledHeroLeft>
					<StyledHeroRight>
						<StyledHeroImage src={movie.Poster} alt={`Foto ${movie.Title}`} />
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

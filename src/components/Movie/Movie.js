import React from "react";
import { Link } from "react-router-dom";
import StyledMovie from "../ui/Movie";
import makeAbsolutePath from "../utils/helper";

function Movie(props) {
	const { movie } = props;
	return (
		<StyledMovie>
			<img
				src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
				alt={`poster ${movie.title}`}
			/>
			<Link to={makeAbsolutePath(`movie/${movie.id}`)}>
				<h3>{movie.title}</h3>
			</Link>
			<p>{movie.year || movie.release_date}</p>
		</StyledMovie>
	);
}

export default Movie;

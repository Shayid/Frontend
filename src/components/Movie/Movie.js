import React from "react";
import StyledMovie from "../ui/Movie";

function Movie(props) {
	const { title, year, poster } = props.movie;
	return (
		<StyledMovie>
			<img src={poster} alt={`poster ${title}`} />
			<h3>{title}</h3>
			<p>{year}</p>
		</StyledMovie>
	);
}

export default Movie;

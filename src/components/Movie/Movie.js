import React from "react";
import styles from "./Movie.module.css";

const Movie = (props) => {
	const { title, year, poster } = props.movie;
	/**
	 * Memanggil Component Movie di dalam Component Movies.
	 */
	return (
		<div className={styles.movie}>
			<img
				className={styles.movie__image}
				src={poster}
				alt={`poster ${title}`}
			/>
			<h3 className={styles.movie__title}>{title}</h3>
			<p className={styles.movie__date}>{year}</p>
		</div>
	);
};

export default Movie;

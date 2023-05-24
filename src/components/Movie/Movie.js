import styles from "./Movie.module.css";

function Movie({ movie }) {
	const { title, year, poster } = movie;
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
}

export default Movie;

import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies = (props) => {
	const { movies, heading } = props;
	return (
		<div className={styles.container}>
			<section className={styles.movies}>
				<h2 className={styles.movies__title}>{heading}</h2>
				<div className={styles.movie__container}>
					{movies && movies.map((d) => <Movie key={d.id} movie={d} />)}
				</div>
			</section>
		</div>
	);
};

export default Movies;

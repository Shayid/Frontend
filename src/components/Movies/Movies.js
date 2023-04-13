import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

const Movies = (props) => {
	const [movies, setMovies] = props.movies;
	// const [movies, setMovies] = useState(props.movies);
	// Membuat state movies

	/**
	 * Fungsi untuk handle event click
	 * Dijalankan ketika button diklik
	 */
	const handleClick = () => {
		const movie = {
			id: nanoid(),
			title: "Jigsaw",
			year: 2021,
			poster: "https://picsum.photos/300/400",
		};

		/**
		 * Update state movies: setMovies
		 * Melakukan teknik spread untuk copy dan merge array
		 */
		setMovies([...movies, movie]);
	};
	return (
		<div className={styles.container}>
			<section className={styles.movies}>
				<h2 className={styles.movies__title}>Latest Movies</h2>
				<div className={styles.movie__container}>
					{movies && movies.map((d) => <Movie key={d.id} movie={d} />)}
				</div>
				{/* Element button diberikan event click: onClick */}
				<button onClick={handleClick}>Add Movie</button>
			</section>
		</div>
	);
};

export default Movies;

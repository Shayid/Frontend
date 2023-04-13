import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm({ movies, setMovies }) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");

	const [isTitleError, setIsTitleError] = useState(false);
	const [isDateError, setIsDateError] = useState(false);

	function handleTitle(e) {
		setTitle(e.target.value);
	}

	function handleDate(e) {
		setDate(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (title === "") {
			setIsTitleError(true);
		} else if (date === "") {
			setIsTitleError(false);
			setIsDateError(true);
		} else {
			const movie = {
				id: nanoid(),
				title: title,
				year: date,
				type: "Movie",
				poster: "https://picsum.photos/300/400",
			};

			// console.log(movie);
			setMovies([...movies, movie]);
			setIsTitleError(false);
			setIsDateError(false);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.movieform}>
				<div className={styles.movieform__left}>
					<img
						src="https://picsum.photos/600/400"
						alt=""
						className={styles.movieform__left__image}
					/>
				</div>
				<div className={styles.movieform__right}>
					<h2 className={styles.movieform__right__title}>Add Movie</h2>
					<form
						action=""
						className={styles.movieform__right__form}
						onSubmit={handleSubmit}
					>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Title</label>
							<input
								type="text"
								className={styles.movieforminput__input}
								onChange={handleTitle}
								name="title"
							/>
							{isTitleError && <Alert>Titile Harus Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Tahun</label>
							<input
								type="tel"
								maxLength="4"
								className={styles.movieforminput__input}
								onChange={handleDate}
								name="year"
							/>
							{isDateError && <Alert>Tahun Harus Diisi!</Alert>}
						</div>
						<button className={styles.movieform__btn} type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddMovieForm;

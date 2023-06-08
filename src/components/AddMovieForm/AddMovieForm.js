import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
	const [formData, setFormData] = useState({
		title: "",
		date: "",
		type: "",
		poster: "",
	});
	const [isError, setIsError] = useState({
		titleError: true,
		dateError: true,
		typeError: true,
		posterError: true,
	});
	const [isSubmited, setIsSubmited] = useState(false);

	const [movies, setMovies] = props.movies;
	const { title, date, type, poster } = formData;
	const { titleError, dateError, typeError, posterError } = isError;

	function handleChange(e) {
		// Destructing name and value
		const { name, value } = e.target;
		// name memiliki, nilai sebagai identifiernya. Sehingga dapat digunakan sebagai key object
		setFormData({ ...formData, [name]: value });
		// jika value mempunyai isi maka set value true, kalo kosong set value false
		value
			? setIsError({ ...isError, [`${name}Error`]: false })
			: setIsError({ ...isError, [`${name}Error`]: true });
		setIsSubmited(false);
	}

	function addMovie() {
		const movie = {
			id: nanoid(),
			title: title,
			year: date,
			type: type,
			poster: poster,
		};
		setMovies([...movies, movie]);
	}

	function validated() {
		return !Object.values(isError).includes(true);
	}

	function handleSubmit(e) {
		e.preventDefault();
		validated() && addMovie();
		setIsSubmited(true);
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
								onChange={handleChange}
								name="title"
								value={title}
							/>
							{titleError && isSubmited && <Alert>Titile Harus Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Tahun</label>
							<input
								type="tel"
								maxLength="4"
								className={styles.movieforminput__input}
								onChange={handleChange}
								name="date"
								value={date}
							/>
							{dateError && isSubmited && <Alert>Tahun Harus Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Tipe</label>
							<select
								name="type"
								type="text"
								className={styles.movieforminput__input}
								onChange={handleChange}
								value={type}
							>
								<option disabled value="">
									---Pilih Tipe---
								</option>
								<option value="Horor">Horor</option>
								<option value="Sci-fi">Sci-fi</option>
								<option value="Adventure">Adventure</option>
								<option value="Romance">Romance</option>
							</select>
							{typeError && isSubmited && <Alert>Tipe Harus Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Poster</label>
							<input
								type="text"
								className={styles.movieforminput__input}
								onChange={handleChange}
								name="poster"
								value={poster}
							/>
							{posterError && isSubmited && <Alert>Poster Harus Diisi!</Alert>}
						</div>
						<Button variant="secondary" size="lg" full>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddMovieForm;

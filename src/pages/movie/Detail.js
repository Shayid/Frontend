import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Detail() {
	const [movies, setMovies] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getRecommendationMovies();
	}, []);

	async function getRecommendationMovies() {
		const response = await axios(ENDPOINTS.RECOMMENDATION(id));
		setMovies(response.data.results);
	}

	return (
		<>
			<DetailMovie />
			<Movies title="Reccomandations Movie" movies={movies} />
		</>
	);
}

export default Detail;

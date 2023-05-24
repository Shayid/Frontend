import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import NowPlayingMovie from "./pages/NowPlayingMovie";
import PopulerMovie from "./pages/PopulerMovie";
import TopRatedMovie from "./pages/TopRatedMovie";
import Layout from "./Layout";

function App() {
	return (
		<>
			{/**
			Membuat Routing
			Bungkus Routing menggunakan Routes
			Buat Routing menggunakan Route
			 */}
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/create" element={<CreateMovie />} />
					<Route path="/movie/popular" element={<PopulerMovie />} />
					<Route path="/movie/now" element={<NowPlayingMovie />} />
					<Route path="/movie/top" element={<TopRatedMovie />} />
				</Routes>
			</Layout>
		</>
	);
}

export default App;

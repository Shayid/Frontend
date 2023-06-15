import { Route, Routes } from "react-router-dom";
import Home from "./pages/movie/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import NowPlayingMovie from "./pages/movie/NowPlayingMovie";
import PopulerMovie from "./pages/movie/PopulerMovie";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Detail from "./pages/movie/Detail";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/create" element={<CreateMovie />} />
						<Route path="/movie/popular" element={<PopulerMovie />} />
						<Route path="/movie/now" element={<NowPlayingMovie />} />
						<Route path="/movie/top" element={<TopRatedMovie />} />
						<Route path="/movie/:id" element={<Detail />} />
					</Routes>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;

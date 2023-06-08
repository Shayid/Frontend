import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import NowPlayingMovie from "./pages/NowPlayingMovie";
import PopulerMovie from "./pages/PopulerMovie";
import TopRatedMovie from "./pages/TopRatedMovie";
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
					</Routes>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Bungkus/Hubungkan Aplikasi dengan browser router.
		Agar URL browser dapat dimanipulasi oleh React Router */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

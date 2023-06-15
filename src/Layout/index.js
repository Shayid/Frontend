import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";

/**
 * Membuat Component Layout.
 * Layout terdiri dai Navbar, Footer, childer.
 *  - Menampilkan konten dinamis
 *  - Menggunakan props childern
 */
function Layout(props) {
	return (
		<>
			<Navbar />
			<main>
				<Container>{props.children}</Container>
			</main>
			<Footer />
		</>
	);
}

export default Layout;

/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import React from "react";
import {
	StyledContainer,
	StyledFooterAuthor,
	StyledFooterTitle,
} from "../ui/Footer";

function Footer() {
	/**
	 * Menggunakan styles yang sudah diimport.
	 * Memanggilnya menggunakan expression.
	 */
	return (
		<StyledContainer>
			<StyledFooterTitle>Movie App</StyledFooterTitle>
			<StyledFooterAuthor>Created by Vedawyne</StyledFooterAuthor>
		</StyledContainer>
	);
}

export default Footer;

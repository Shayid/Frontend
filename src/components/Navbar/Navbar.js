import React from "react";
import { Link } from "react-router-dom";
import {
	StyledContainer,
	StyledNavbar,
	StyledNavbarBrand,
	StyledNavbarList,
	StyledNavbarItem,
} from "../ui/Navbar";
import styled from "styled-components";

export const StyledNavbarLink = styled(Link)`
	text-decoration: none;
	color: whitesmoke;

	&:hover {
		color: white;
	}
`;

const Navbar = () => {
	return (
		<StyledContainer>
			<StyledNavbar>
				<StyledNavbarBrand>Movie App</StyledNavbarBrand>
				<StyledNavbarList>
					<StyledNavbarItem>
						<StyledNavbarLink to="/">Home</StyledNavbarLink>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<StyledNavbarLink to="/movie/create">Add Movie</StyledNavbarLink>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<StyledNavbarLink to="/movie/popular">Popular</StyledNavbarLink>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<StyledNavbarLink to="/movie/now">Now Playing</StyledNavbarLink>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<StyledNavbarLink to="/movie/top">Top Rated</StyledNavbarLink>
					</StyledNavbarItem>
				</StyledNavbarList>
			</StyledNavbar>
		</StyledContainer>
	);
};

export default Navbar;

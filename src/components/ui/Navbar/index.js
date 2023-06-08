import styled from "styled-components";

export const StyledContainer = styled.div`
	background-color: #4361ee;
	padding: 1rem;
	color: #fff;
`;

export const StyledNavbar = styled.nav`
	display: flex;
	flex-direction: column;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.md}) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledNavbarBrand = styled.h1`
	font-size: 2.4rem;
	margin-bottom: 1rem;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.md}) {
		margin-bottom: 0;
	}
`;

export const StyledNavbarList = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;
	list-style: none;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.md}) {
		flex-direction: row;
	}
`;

export const StyledNavbarItem = styled.li`
	margin-bottom: 1rem;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.md}) {
		margin: 0 1rem;
	}
`;

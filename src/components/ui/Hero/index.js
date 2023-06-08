import styled from "styled-components";

export const StyledContainer = styled.div`
	margin: 1rem;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.lg}) {
		max-width: 1200px;
		margin: 3rem auto;
	}
`;

export const StyledHero = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.lg}) {
		margin: 0 1rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: left;
	}
`;

export const StyledHeroLeft = styled.div`
	margin-bottom: 1rem;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.lg}) {
		flex-basis: 40%;
	}
`;

export const StyledHeroTitle = styled.h2`
	color: #4361ee;
	margin-bottom: 1rem;
	font-size: 2.44rem;
`;

export const StyledHeroGenre = styled.h3`
	color: #b5179e;
	margin-bottom: 1rem;
	font-size: 1.59rem;
`;

export const StyledHeroDescription = styled.p`
	color: #64748b;
	margin-bottom: 1rem;
`;

export const StyledHeroRight = styled.div`
	margin-bottom: 1rem;

	@media (min-width: ${({ theme: { sizeRes } }) => sizeRes.lg}) {
		flex-basis: 40%;
		display: flex;
		justify-content: center;
	}
`;

export const StyledHeroImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 25px;
`;

export const StyledHeroLoader = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

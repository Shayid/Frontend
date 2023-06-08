// Import Styled Component
import styled, { css } from "styled-components";

const _ = (size, theme, property = "") => {
	if (size === "lg") {
		return property === "padding" ? theme.size.lg.p : theme.size.lg.fs;
	} else if (size === "md") {
		return property === "padding" ? theme.size.md.p : theme.size.md.fs;
	} else if (size === "sm") {
		return property === "padding" ? theme.size.sm.p : theme.size.sm.fs;
	} else {
		return property === "padding" ? theme.size.md.p : theme.size.md.fs;
	}
};

const Button = styled.button`
	border: none;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;

	background-color: ${({ variant, theme }) =>
		theme.colors[variant] || theme.colors.primary};

	${({ full }) =>
		full &&
		css`
			display: block;
			width: 100%;
		`}

	font-size: ${({ size, theme }) => _(size, theme, "")};
	padding: ${({ size, theme }) => _(size, theme, "padding")};
`;
export default Button;

/**
 * Function pembantu untuk menanggulangi kesalahan path.
 * @param {string} relativePath
 * @param {string} typeLink
 * @returns
 */
function makeAbsolutePath(relativePath, typeLink = "http") {
	return typeLink === "http"
		? `${window.location.origin}/${relativePath}`
		: `${relativePath}`;
}

export default makeAbsolutePath;

import styles from "./index.module.css";

/**
 * Membuat Component Container.
 * Menggunakan Teknik Composition: children.
 */
function Container(props) {
	return <div className={styles.container}>{props.children}</div>;
}

export default Container;

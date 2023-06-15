import styles from "./Alert.module.css";

function Alert({ children }) {
	return <p className={styles.alert__danger}>{children}</p>;
}

export default Alert;

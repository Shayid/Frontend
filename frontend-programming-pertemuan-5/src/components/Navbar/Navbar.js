import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movies App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Popular Movie</li>
            <li className={styles.navbar__item}>Top Movie</li>
            <li className={styles.navbar__item}>Now Release</li>
            <li className={styles.navbar__item}>More Movie</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

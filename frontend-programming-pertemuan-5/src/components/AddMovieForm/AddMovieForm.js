import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
        <div className={styles.container}>
             Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
        </div>
    );
}
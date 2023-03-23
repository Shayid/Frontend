console.log("Mulai react");

function Hello(props) {
    console.log(props);

    const { nama } = props;

    return (
        <div className="hello">
            <h2>Разработчики</h2>
            <p>{props.nama} - Frontend Engineer</p>
        </div>
    );
}

function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Tier List</li>
                <li>About</li>
                <li>Contact</li>
                <li>Info</li>
            </ul>
        </nav>
    );
}

function Main() {
    return (
        <main>
            <Hello />
            <Hello nama="Shayid" />
            <Hello nama="Mikhail" />
            <Hello nama="Hintersatz" />
            <Hello nama="Sumbul" />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <h2>Copyright By Shayid</h2>
            <li>Power by : VSC</li>
            <p>Dibuat menggunakan ReactJS</p>
        </footer>
    );
}

function App () {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
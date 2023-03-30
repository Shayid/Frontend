import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";


function Main() {
  return (
    <main>
      <Hero />
      <Movies />
    </main>
  );
}


function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;

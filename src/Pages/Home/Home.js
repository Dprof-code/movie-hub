import NavBar from '../../Components/NavBar/Navbar';
import Landing from '../../Components/Landing/Landing';
import MovieCard from '../../Components/MovieCard/MovieCard';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Landing />
      <MovieCard />
      <Footer />
    </div>
  );
}

export default Home;

import NavBar from '../Components/NavBar/Navbar';
import Landing from '../Components/Landing/Landing';
import MovieCard from '../Components/MovieCard/MovieCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Landing />
        <MovieCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;

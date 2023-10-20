import Header from "./components/Header";
import MovieList from "./components/MoviesList";
import { MovieContainer } from "./styles/MovieContainer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <MovieContainer>
        <MovieList movies={[]} />
      </MovieContainer>
    </div>
  );
}

import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import MovieList from "../components/MoviesList";
import { MovieContainer } from "../styles/MovieContainer";

export default function Home() {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const { data } = await MovieService.getHeroShows();

    console.log(data);

    setShows(data);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <MovieContainer>
      <MovieList movies={shows} />
    </MovieContainer>
  );
}

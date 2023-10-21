import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../api/MovieService";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const { data } = await MovieService.getShowById(id);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  });

  return (
    <section>
      <h1>
        {movie.name} | {movie.network?.name}
      </h1>

      <img
        src={movie.image?.original}
        alt={`The cover art for ${movie.name}`}
      />

      <article dangerouslySetInnerHTML={{ __html: movie.summary }}></article>
    </section>
  );
}

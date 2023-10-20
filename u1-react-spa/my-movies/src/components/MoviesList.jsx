import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
  <section>
    <ul>
      {movies.map((m) => <MovieItem title={m.title} />)}
    </ul>
  </section>
  );
}

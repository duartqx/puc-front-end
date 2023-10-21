import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
    <section>
      <ul>
        {movies.map((m) => (
          <MovieItem key={m.show.id} movie={m.show} />
        ))}
      </ul>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <li>
      <Link to={`movie/${movie.id}`}>
        {movie.name} | {movie.network?.name}
      </Link>
    </li>
  );
}

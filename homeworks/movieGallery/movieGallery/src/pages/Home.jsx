import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "Dune", year: 2021 },
  { id: 4, title: "The Dark Knight", year: 2008 },
  { id: 5, title: "The Matrix", year: 1999 },
];

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <h1>Галерея фильмов</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title} ({movie.year})</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Home;

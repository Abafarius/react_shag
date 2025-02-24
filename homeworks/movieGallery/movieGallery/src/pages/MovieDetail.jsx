import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const movies = [
  { id: 1, title: "Inception", description: "A mind-bending thriller by Christopher Nolan." },
  { id: 2, title: "Interstellar", description: "A sci-fi epic exploring space and time." },
  { id: 3, title: "Dune", description: "An adaptation of Frank Herbert's classic novel." },
  { id: 4, title: "The Dark Knight", description: "A masterpiece with the legendary Joker." },
  { id: 5, title: "The Matrix", description: "A cyberpunk classic questioning reality." },
];

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Фильм не найден</h2>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="container"
    >
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </motion.div>
  );
}

export default MovieDetail;

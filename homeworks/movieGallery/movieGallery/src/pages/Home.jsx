import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const movies = [
  { id: 1, title: "Inception", year: 2010, poster: "/images/inception.jpg" },
  { id: 2, title: "Interstellar", year: 2014, poster: "/images/interstellar.jpeg" },
  { id: 3, title: "Dune", year: 2021, poster: "/images/dune.jpg" },
  { id: 4, title: "The Dark Knight", year: 2008, poster: "/images/dark-knight.jpeg" },
  { id: 5, title: "The Matrix", year: 1999, poster: "/images/matrix.jpg" },
];

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: white;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
`;

const MovieCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

function Home() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>🎬 Галерея фильмов</h1>
      <MovieGrid>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <MovieCard whileHover={{ scale: 1.1 }}>
              <MovieImage src={movie.poster} alt={movie.title} />
              <h3>{movie.title} ({movie.year})</h3>
            </MovieCard>
          </Link>
        ))}
      </MovieGrid>
    </Container>
  );
}

export default Home;

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const movies = [
  { id: 1, title: "Inception", description: "A mind-bending thriller by Christopher Nolan.", poster: "/images/inception.jpg" },
  { id: 2, title: "Interstellar", description: "A sci-fi epic exploring space and time.", poster: "/images/interstellar.jpg" },
  { id: 3, title: "Dune", description: "An adaptation of Frank Herbert's classic novel.", poster: "/images/dune.jpg" },
  { id: 4, title: "The Dark Knight", description: "A masterpiece with the legendary Joker.", poster: "/images/dark-knight.jpg" },
  { id: 5, title: "The Matrix", description: "A cyberpunk classic questioning reality.", poster: "/images/matrix.jpg" },
];

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: white;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.5);
`;

const BackButton = styled.button`
  background: red;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: darkred;
  }
`;

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Фильм не найден</h2>;

  return (
    <Container initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
      <h1>{movie.title}</h1>
      <Poster src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <BackButton onClick={() => navigate(-1)}>Назад</BackButton>
    </Container>
  );
}

export default MovieDetail;

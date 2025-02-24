import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: white;
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

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Ошибка 404</h1>
      <p>Страница не найдена</p>
      <BackButton onClick={() => navigate("/")}>На главную</BackButton>
    </Container>
  );
}

export default NotFound;

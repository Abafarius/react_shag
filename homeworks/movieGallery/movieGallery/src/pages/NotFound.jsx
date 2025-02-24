import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <h1>Ошибка 404</h1>
      <p>Страница не найдена</p>
      <button onClick={() => navigate("/")}>На главную</button>
    </motion.div>
  );
}

export default NotFound;

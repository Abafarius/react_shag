import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Главная
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Проекты
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Обо мне
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Контакты
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

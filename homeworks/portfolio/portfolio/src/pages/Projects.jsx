import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, CardContent, Typography, Button } from "@mui/material";

function Projects() {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Мои проекты
      </Typography>
      {projects.map((project) => (
        <Card key={project.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Button
              variant="contained"
              color="primary"
              href={project.github}
              target="_blank"
              sx={{ marginTop: 1 }}
            >
              GitHub
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;

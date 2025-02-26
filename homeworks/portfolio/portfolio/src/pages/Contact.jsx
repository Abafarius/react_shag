import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cmt1jar", 
        "template_c1einpz", 
        formData,
        "06BV5O4rhLXq-JPTq" 
      )
      .then(
        () => {
          alert("Сообщение отправлено!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Ошибка при отправке: " + error.text);
        }
      );
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Контакты
      </Typography>
      <Typography variant="body1">📧 Email: kepler1885@mail.ru</Typography>
      <Typography variant="body1">📍 Город: Алматы, Казахстан</Typography>
      <Typography variant="body1">
        🔗 Социальные сети: <Link href="https://github.com/Abafarius">GitHub</Link>,
        <Link href="https://www.linkedin.com/in/galymzhan-yessimbek-618bb6235/"> LinkedIn</Link>
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Сообщение"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Отправить сообщение
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
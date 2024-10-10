import React from "react";
import { Grid, Typography, Chip, Box } from "@mui/material";

const themes = [
  "Tous les articles",
  "Addiction au sexe",
  "Addiction aux jeux",
  "Adoption",
  "Affirmation de soi",
  "Agressivité",
  "Alcoolisme",
  "Anorexie",
  "Anorgasmie",
  "Anxiété",
  "Aptitudes sociales",
  "Autisme",
  "Boulimie",
  "Burn-out",
  "Coaching",
  "Confiance en soi",
  "Conseiller orientation",
  "Crise de panique",
  "Crise existentielle",
  // ... add more themes
];

const ArticleThemes = () => {
  return (
    <section className="article-themes">
      <Typography variant="h2" component="h2" gutterBottom>
        Articles par thèmes
      </Typography>
      <Box>
        <Grid container spacing={1}>
          {themes.map((theme, index) => (
            <Grid item key={index}>
              <Chip
                label={theme}
                component="a"
                href="#"
                clickable
                variant="outlined"
                sx={{ textDecoration: "none" }}
                onClick={(event) => {
                  event.preventDefault();
                  // Handle theme selection here
                  console.log(`Selected theme: ${theme}`);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default ArticleThemes;

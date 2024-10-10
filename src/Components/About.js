import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import NavBar from './NavBar';

const AboutPage = () => {
  return (
    <div><NavBar/>
    <Container>
      <Box sx={{ padding: '40px 0', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          À propos de Notre Application
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '18px' }}>
          Notre plateforme est conçue pour faciliter la connexion entre les utilisateurs et des médecins qualifiés.
          Nous visons à offrir un accès rapide et pratique aux soins de santé, quel que soit l'endroit où vous vous trouvez.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '18px' }}>
          Grâce à notre interface intuitive, les utilisateurs peuvent trouver et consulter des médecins spécialisés,
          prendre des rendez-vous en ligne, discuter via un chat sécurisé et obtenir des diagnostics précis en toute
          simplicité. Que vous ayez besoin d'une consultation rapide ou d'un suivi médical régulier, notre application
          s'assure que vous recevez l'attention nécessaire.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '18px' }}>
          Nous croyons fermement en l'importance de la continuité des soins. C'est pourquoi nous vous permettons
          d'accéder à votre historique médical et d'interagir directement avec vos médecins pour des consultations
          plus personnalisées. De plus, nous garantissons une confidentialité totale et une sécurité des données
          à travers notre plateforme.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '18px' }}>
          Que vous soyez patient ou praticien, notre application vise à simplifier et améliorer votre expérience de santé.
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '16px' }}>
          Pour plus d'informations, n'hésitez pas à nous contacter à: contact@webmedplatform.com
        </Typography>
      </Box>
    </Container>
    </div>
  );
};

export default AboutPage;

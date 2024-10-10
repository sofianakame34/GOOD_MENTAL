import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SignUpForm = () => {
  const [accountType, setAccountType] = useState('user');
  const [formData, setFormData] = useState({
    user_id: '',
    admin_id: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
    date_naissance: '',
    role: '',
    historique_resultats: '',
    statut: 'Actif',
    acces_patient: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 3,
        boxShadow: 3,
        marginTop: 5, // Ajoute une marge en haut
        display: 'flex',
        justifyContent: 'flex-end', // Aligne le formulaire à droite
        right: 0, // Aligne à droite
        marginRight: 3, // Ajoute une marge à droite
      }}
    >
      <Box sx={{ width: '100%' }}> {/* Conteneur pour gérer l'alignement */}
      <Typography variant="h4" gutterBottom>Sign Up</Typography>

      {/* Type de Compte: Utilisateur ou Admin */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="account-type-label">Type de Compte</InputLabel>
        <Select
          labelId="account-type-label"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <MenuItem value="user">Compte Utilisateur (Patient)</MenuItem>
          <MenuItem value="admin">Compte Admin (Professionnel)</MenuItem>
        </Select>
      </FormControl>

      {/* Formulaire pour Compte Utilisateur (Patient) */}
      {accountType === 'user' && (
        <>
          <TextField
            fullWidth
            label="Identifiant unique"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Date de naissance"
            name="date_naissance"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.date_naissance}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Référence historique des résultats"
            name="historique_resultats"
            value={formData.historique_resultats}
            onChange={handleChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="statut-label">Statut</InputLabel>
            <Select
              labelId="statut-label"
              name="statut"
              value={formData.statut}
              onChange={handleChange}
            >
              <MenuItem value="Actif">Actif</MenuItem>
              <MenuItem value="Inactif">Inactif</MenuItem>
            </Select>
          </FormControl>
        </>
      )}

      {/* Formulaire pour Compte Admin (Professionnel) */}
      {accountType === 'admin' && (
        <>
          <TextField
            fullWidth
            label="Identifiant unique"
            name="admin_id"
            value={formData.admin_id}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom du professionnel"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Prénom du professionnel"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Rôle du professionnel"
            name="role"
            value={formData.role}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Référence aux utilisateurs (patients)"
            name="acces_patient"
            value={formData.acces_patient}
            onChange={handleChange}
            margin="normal"
          />
        </>
      )}

      {/* Bouton de soumission */}
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;

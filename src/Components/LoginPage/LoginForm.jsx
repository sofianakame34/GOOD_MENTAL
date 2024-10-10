import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import MainLayout from "../UtilisateurComponents/interface1/components/MainLayout";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // Initialize navigation

  // Dummy login check (replace with actual logic)
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form refresh
    if (username === "user" && password === "password") {
      // Simulate successful login (replace this logic with actual API check)
      setIsLoggedIn(true);
      navigate("/MainLayout"); // Redirect to MainLayout page after login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h2 className={styles.title}>Vous êtes un utilisateurs déjà inscrit ?</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="username" className={styles.label}>
          Identifiant
        </label>
        <input
          type="text"
          id="username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Mot de passe
        </label>
        <div className={styles.passwordInput}>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Tapez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6408e39515fb558a2c0ba4c9a738273ca175a617b1f22b134cbb8efa0866c41f?placeholderIfAbsent=true&apiKey=4af6d38b4e1f414ca48eef301541d7ae"
            alt=""
            className={styles.passwordIcon}
          />
        </div>
      </div>
      <div className={styles.rememberMe}>
        <input type="checkbox" id="remember" className={styles.checkbox} />
        <label htmlFor="remember">Rester connecté</label>
      </div>
      <button type="submit" className={styles.submitButton}>
        Connexion
      </button>
      <a href="#" className={styles.forgotPassword}>
        Mot de passe oublié ?
      </a>
      <div className={styles.signUp}>
        <span>Toujours pas inscrit? </span>
        <a href="#" className={styles.signUpLink}>
          Créer un compte gratuit.
        </a>
      </div>
    </form>
  );
}

export default LoginForm;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFoundContent.module.css";

const PageNotFoundContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.message}>Oeps! Pagina niet gevonden</h2>
      <p className={styles.description}>
        Het lijkt erop dat de pagina die je zoekt niet bestaat of is verplaatst.
      </p>
      <Link to="/" className={styles.homeButton}>
        Ga terug naar Home
      </Link>
    </div>
  );
};

export default PageNotFoundContent;

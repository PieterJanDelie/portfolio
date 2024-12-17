import React from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = ({ duration = 2 }) => {
  return (
    <div
      className="loading-container"
      style={{ animationDuration: `${duration}s` }}
    >
      <div className="spinner"></div>
      <p>Pagina wordt geladen...</p>
    </div>
  );
};

export default LoadingAnimation;

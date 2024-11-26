import React from "react";

const Card = ({ title, footer, children }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
      <footer style={styles.footer}>{footer}</footer>
    </div>
  );
};

const styles = {
  
  card: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    marginTop: "10px",
    color: "#555",
    fontSize: "0.9em",
  },
  
};

export default Card;

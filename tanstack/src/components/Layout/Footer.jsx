import React from "react";
import "./Header.css"; // Link to dark theme styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TANSTACK QUERY. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

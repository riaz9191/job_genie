import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  const location = useLocation();

  return (
    <div className="error-404">
      <div className="container">
        
        <h1 className="title">Oops! Page not found</h1>
        <p className="status-code">
          Error 404: {location.pathname} not found
        </p>
        <p className="message">
          The requested page was not found on this server. Please check the URL
          and try again.
        </p>
        <Link to="/" className="home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;

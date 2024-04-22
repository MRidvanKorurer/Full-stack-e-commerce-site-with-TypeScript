import Login from "./Login";
import Register from "./Register";
import "./Auth.css";
import React from "react";

const Auth: React.FC = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Auth;
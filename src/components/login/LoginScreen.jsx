import React from "react";
import {useNavigate} from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogIn = () => {
    navigate('/marvel', {replace: true})
  }
  return (
    <div className={"container"}>
      <h1>LoginScreen</h1>
      <hr/>
      <button className="btn btn-primary" onClick={handleLogIn}> Log In</button>
    </div>
  );
};
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {login} = useContext(AuthContext)

  const handleLogIn = () => {
    login('Guillermo Serra');
    const lastPath = localStorage.getItem('lastPath');
    const redirectUrl = lastPath ?? '/'
    navigate(redirectUrl, {replace: true})
  }


  return (
    <div className={"container"}>
      <h1>LoginScreen</h1>
      <hr/>
      <button className="btn btn-primary" onClick={handleLogIn}> Log In</button>
    </div>
  );
};

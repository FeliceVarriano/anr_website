import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link className={className} onClick={() => loginWithRedirect()}>
      Login
    </Link>
  );
};

export default LoginButton;

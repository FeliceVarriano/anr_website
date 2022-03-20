import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

const LoginButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button buttonStyle={className} onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
};

export default LoginButton;

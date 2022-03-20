import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

const LogoutButton = ({ className }) => {
  const { logout } = useAuth0();
  return (
    <Button buttonStyle={className} onClick={() => logout()}>
      Log out
    </Button>
  );
};

export default LogoutButton;

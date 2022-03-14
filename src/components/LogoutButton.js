import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = ({ className }) => {
  const { logout } = useAuth0();
  return (
    <Link className={className} onClick={() => logout()}>
      Log out
    </Link>
  );
};

export default LogoutButton;

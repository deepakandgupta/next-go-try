import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import NavPhone from "./NavPhone";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AuthContext } from "../../helpers/AuthContext";

const NavigationMenu = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const authContext = useContext(AuthContext);
  const { isAuthenticated, name } = (authContext as any).auth;

  useEffect(() => {}, [matches]);

  return (
    <>
      {matches ? (
        <Nav isAuthenticated={isAuthenticated} name={name} />
      ) : (
        <NavPhone isAuthenticated={isAuthenticated} name={name} />
      )}
    </>
  );
};
export default NavigationMenu;

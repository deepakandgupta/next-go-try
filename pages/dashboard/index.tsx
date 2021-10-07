import { Typography } from "@material-ui/core";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { routes } from "../../constants/routes";
import Loader from "../../src/components/Loader";
import { AuthContext } from "../../src/helpers/AuthContext";

export default function Dashboard() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
  }, [authContext]);

  if (!authContext.auth.isAuthenticated) {
    return <Loader />;
  }

  return <Typography variant="h5">Welcome {authContext.auth.name}</Typography>;
}

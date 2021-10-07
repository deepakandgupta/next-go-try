import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import Head from "next/head";
import AuthProvider from "../src/helpers/AuthContext";
import Loader from "../src/components/Loader";

import NavigationMenu from "../src/components/NavigationMenu";
export default function MyApp(props) {
  const [loading, setLoading] = React.useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthProvider>
        {loading && <Loader />}
          <NavigationMenu />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

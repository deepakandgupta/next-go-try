import React from "react";
import Head from "next/head";

import { Grid, makeStyles, Typography } from "@material-ui/core";
import { getURL } from "../src/helpers/handlers/auth";

const useStyles = makeStyles({
  root: {},
  image: {
	width: "100%",
    height: "99vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
	overflowX: "hidden",
	overflowY: "hidden",
	color: "#ffffff",
  },
  articles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
   backgroundColor: "rgba(76, 175, 80, 0.3)",
  },
});

export default function Home({ }) {
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root}>
      {getURL()}
      <Head>
        <title>Go-Next Site</title>
        <meta name="description" content="golang and next js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item className={classes.image}>
        <Typography className={classes.title} variant="h3">GO and Next </Typography>
      </Grid>
    </Grid>
  );
}

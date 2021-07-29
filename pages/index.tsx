import React from "react";
import Head from "next/head";

import theme from "../src/theme";
import { makeStyles, Typography } from "@material-ui/core";




const useStyles = makeStyles({
	root: {
		textAlign: "center",
	},
	articles: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	article: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		// padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
});



export default function Home({ articles }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Head>
				<title>Go-Next Site</title>
				<meta name="description" content="golang and next js app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Typography variant="h3">Articles</Typography>
      
		</div>
	);
}

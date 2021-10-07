import React from "react";
import MarkdownIt from "markdown-it";

import { makeStyles, Paper, Typography } from "@material-ui/core";

import { ArticleModel } from "../../../interfaces/article";


export async function getServerSideProps(context) {
	const articleId = context.params.slug;
	const backendURL = process.env.BACKEND_URL;
	const articleURL = `${backendURL}/article/${articleId}`;
	const res = await fetch(articleURL);
	const data = await res.json();
	const article = data.data;

	if (!article || data.error) {
		return {
			notFound: true,
		};
	}

	return {
		props: { article },
	};
}

interface Props {
	article: ArticleModel;
}

const mdParser = new MarkdownIt();

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "center",
		whiteSpace: "normal"
	},
	paper: {
		padding: 20,
		width: "80vw",
		boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
		
	},
	title: {
		textAlign: "center"
	},
	content: {
		"& *": {
			overflow: "auto"
		}
	},
});

const Article = ({ article }: Props) => {
	const classes = useStyles();

	function createMarkup(value: string) {
		const data = mdParser.render(value)
		return {__html: data};
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
			<Typography className={classes.title} variant="h3">{article.title}</Typography>
			<div className={classes.content} dangerouslySetInnerHTML = {createMarkup(article.content)}/>
			</Paper>
		</div>
	);
};

export default Article;

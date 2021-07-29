import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticleModel } from "../../../interfaces/article";

export async function getServerSideProps(context) {
	const articleId = context.params.slug;
	const backendURL = process.env.BACKEND_URL;
	const articleURL = `${backendURL}/article/${articleId}`;
	console.log(articleURL);
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

const useStyles = makeStyles({
	root: {
		textAlign: "center",
	},
	articles: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

const Article = ({ article }: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h3">{article.title}</Typography>
			<ReactMarkdown>{article.content}</ReactMarkdown>
		</div>
	);
};

export default Article;

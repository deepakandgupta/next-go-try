import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
        height: 300,
		minWidth: 275,
		maxWidth: "30vw",
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	title: {
		fontSize: 14,
	},
	btn: {
		display: "unset",
	},
});

interface Props {
	title: string;
	content: string;
	clickHandler: Function;
}

export default function ArticleCard(props: Props) {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					username
				</Typography>
				<Typography variant="h5" component="h2">
					{props.title}
				</Typography>
				<Typography variant="body2" component="p">
					{props.content}
				</Typography>
			</CardContent>
			<CardActions className={classes.btn}>
				<Button onClick={() => props.clickHandler()} size="small">
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}

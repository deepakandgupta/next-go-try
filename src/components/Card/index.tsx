import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
        height: 200,
		minWidth: 200,
		maxWidth: "300",
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
		backgroundColor: "rgba(245,245,245, 1)",
		boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
	},
	title: {
		fontSize: 14,
	},
	btn: {
		display: "unset",
	},
});

interface Props {
	name: string
	title: string;
	clickHandler: Function;
}

export default function ArticleCard(props: Props) {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h5">
					{props.title}
				</Typography>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					By {props.name}
				</Typography>
			</CardContent>
			<CardActions className={classes.btn}>
				<Button onClick={() => props.clickHandler()} size="small">
					Read Story
				</Button>
			</CardActions>
		</Card>
	);
}

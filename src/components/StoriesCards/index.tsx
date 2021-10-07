import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import ArticleCard from "../Card";
import theme from "../../theme";
import { ArticleModel } from "../../../interfaces/article";

const useStyles = makeStyles({
  root: {
    minHeight: "80vh",
    backgroundColor: "rgba(245,245,245, 1)",
  },
  articles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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

interface Props {
  articles: ArticleModel[];
}

export default function StoriesCards({ articles }: Props) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Grid className={classes.articles} container spacing={0}>
        {articles.map((article) => {
          return (
            <Grid
              className={classes.article}
              item
              xs={12}
              sm={6}
              md={3}
              key={article._id}
            >
              <ArticleCard
                name={article.name}
                title={article.title}
                clickHandler={() => {
                  router.push(`stories/${article._id}`);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

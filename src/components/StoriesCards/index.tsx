import { Grid, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import ArticleCard from '../Card';
import theme from '../../theme';
import { ArticleModel } from '../../../interfaces/article';

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

interface Props {
	articles: ArticleModel[];
}

export default function StoriesCards({articles} : Props) {
    const classes = useStyles();
  const router = useRouter();

    return (
        <div>
        <Grid className={classes.articles} container spacing={3}>
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
                            title={article.title}
                            content={article.content}
                            clickHandler={() =>{
                                router.push(`stories/${article._id}`)
          }
                            }
                        />
                    </Grid>
                );
            })}
        </Grid>
    </div>
    )
}

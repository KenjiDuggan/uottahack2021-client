import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './TranslatePage.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    column: {
      height: '100vw'
    },
  }));

  

const TranslatePage = () => {
  const classes = useStyles();
  const { id } = useParams();

  console.log(id);

  const post = useSelector(state =>
    state.currentNews.posts.find(obj => {
        return obj.publishedAt === id
      })
  )

  console.log(post);
 
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <Container maxWidth="md">
            <Grid  className={classes.root}>
                <Grid item xs={4} className={classes.column}>

                </Grid>
                <Grid item xs={4} className={classes.column}>

                </Grid>
                <Grid item xs={4} className={classes.column}>

                </Grid>
            </Grid>
    </Container>
  )
}

export default TranslatePage
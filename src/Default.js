
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from "./components/NewsCard/NewsCard";
import SampleComponent from "./SampleComponent";
import Grid from '@material-ui/core/Grid';
import "./Default.css";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
     
    },
    paper: {
    
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '20px'
    },
  }));
 
const Default = (props) => {
    const classes = useStyles();
    const [articles, setArticles] = useState(props.news);

    useEffect(() => {
        setArticles(props.news)
    }, [props.news]);

  return (
    <div >
        <h1>COVID-19 Updates</h1>
        <h3>Ontario</h3>
        <br />
        <Grid spacing={12}  className={classes.root}>
            { articles.length > 0 && articles.map((article, i) => (
                <NewsCard className={classes.paper} key={article} article={article} key={article.publishedAt} />
            ))}
 
        </Grid>
    </div>
  );
}

export default Default
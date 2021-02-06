
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
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '10px'
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
        <div>Ontario</div>
        <Grid spacing={2}  className={classes.root}>
           
            { articles.length > 0 && articles.map((article, i) => (
                <NewsCard key={article} article={article} key={i} />
            ))}
            <SampleComponent color="blue" />
         
        </Grid>
    </div>
  );
}

export default Default
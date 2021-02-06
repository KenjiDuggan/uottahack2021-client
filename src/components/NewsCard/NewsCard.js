import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const NewsCard = ({ article }) => {
  const classes = useStyles();
  console.log(article);
  const { author, content, description, publishedAt, source, title, url, urlToImage } = article;
  return (
    <Grid item xs={4}>
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={urlToImage}
              title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
                { title }
              </Typography>
              
              <Typography variant="body2" color="textSecondary" component="p">
                { description }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="source">source</a>
            <Button size="small" color="primary"> //onClick event to specific image page
              Learn More
            </Button>
          </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;

import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import history from '../../history'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({
  paper: {
   
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    float: 'left',
    marginTop: '-15px',
    marginLeft: '10px'
  },
  content: {
    textAlign: 'left',
  },
  orange: {
    backgroundColor: '#F38042',
  }
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: '1.0rem',
    textTransform: 'none'
  }
})(Typography);

const NewsCard = ({ article }) => {
  const classes = useStyles();
 
  const routeChange = () => {
    let path = `/feed/${article.publishedAt}`;
    history.push(path);
  }
 
  const { author, content, description, publishedAt, source, title, url, urlToImage } = article;
  return (
      <Grid item xs={4}>
          <Card className={classes.paper}>
            <CardActionArea onClick={routeChange} >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={urlToImage}
                title="Contemplative Reptile"
              />
              <Fab size="small" color="primary" variant="extended" className={classes.button}>
                <NavigationIcon className={classes.extendedIcon} />
                { source.name }
              </Fab> 
              <br />
              <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h5">
                  { title }
                </Typography>
 
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
              }}>
                  <CalendarTodayIcon style={{marginRight: '5px'}} />
                  { publishedAt }
              </div>  
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                  { author }
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" className={classes.orange} onClick={routeChange} >
                <WhiteTextTypography variant="h5">Read more...</WhiteTextTypography>
              </Button>
            </CardActions>
        </Card>
      </Grid>
  );
};

export default NewsCard;

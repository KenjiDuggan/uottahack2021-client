import React from 'react'
import { useSelector } from 'react-redux'
import history from './history'
import { useParams } from 'react-router'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './NewsPage.css';

const NewsPage = () => {
  const { id } = useParams();
 
  const post = useSelector(state =>
    state.currentNews.posts.find(obj => {
        return obj.publishedAt === id
      })
  )

  const routeChange = () => {
    let path = `/feed/${post.publishedAt}/translate`;
    history.push(path);
  }
 
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <Container maxWidth="md">
        <h1>{post.title}</h1>
        <img alt="blog background" src={post.urlToImage} className="postImage" />
        <h3>{post.content}</h3>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                 <div className="qrcode">
                    <h1 className="bigButtonText">Speak To Me</h1>
                    <img src={process.env.PUBLIC_URL + '/images/qr_example.jpg'} className="qrcodeImage" />
                 </div> 
            </Grid>
            <Grid item xs={6}>
                <div className="bigButton" onClick={routeChange}>
                    <h1 className="bigButtonText">Translate Now</h1>
                    <img alt="translate logo" src={process.env.PUBLIC_URL + '/images/translate.svg'} className="globeImage icon-comment iccoo" />
                </div>
            </Grid> 
        </Grid>
    </Container>
  )
}

export default NewsPage   
   
 
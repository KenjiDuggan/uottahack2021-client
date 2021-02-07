import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import './NewsPage.css';

const NewsPage = () => {
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
                <NavLink to={`/feed/translate/` + id}>
                    <div className="bigButton">
                        <h1 className="bigButtonText">Translate Now</h1>
                        <img alt="translate logo" src={process.env.PUBLIC_URL + '/images/translate.svg'} className="globeImage icon-comment iccoo" />
                    </div>
                </NavLink>
            </Grid> 
        </Grid>
    </Container>
  )
}

export default NewsPage   
   
 
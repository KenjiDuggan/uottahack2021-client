import React from 'react'
import { useSelector } from 'react-redux'
import history from './history'
import { useParams } from 'react-router'
import Container from '@material-ui/core/Container';
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
        <section>
            <h1>{post.title}</h1>
            <img alt="blog background" src={post.urlToImage} />
            <p>{post.content}</p>
            <div className="bigButton" onClick={routeChange}>
                <h1 className="bigButtonText">Translate Now</h1>
                <img alt="translate logo" src={process.env.PUBLIC_URL + '/images/translate.svg'} className="globeImage icon-comment iccoo" />
            </div>
        </section>
    </Container>
  )
}

export default NewsPage   
   
 
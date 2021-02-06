import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Default from './Default';
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import allActions from './store/actions/index';
import axios from 'axios';
import { config } from './config';
import "./App.css";
 
function App() {
  const currentNews = useSelector(state => state.posts)
  const newsLoading = useSelector(state => state.loading)
  const [news, setNews] = useState([]);

  const dispatch = useDispatch();

  const [left, setLeft] = useState(false);
 
  function toggleDrawer() {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
 
    setLeft(prevLeft => !prevLeft);
  }
 
  function openDrawer() {
    setLeft(prevLeft => !prevLeft);
  }
 
  useEffect(() => {
    dispatch(allActions.newsActions.newsLoading());
    axios.get(`https://newsapi.org/v2/everything?q=covid+AND+ontario&from=2021-02-05&to=2021-02-06&sortBy=relevancy&apiKey=${config.key}`).then(response => {
      dispatch(allActions.newsActions.loadNewsSuccess(response.data.articles))
      setNews(response.data.articles);
    }).catch(error => {
      console.log(error);
      dispatch(allActions.newsActions.newsLoading(false));
    })
  }, [])

  if(newsLoading) {
    return <h1>News articles are loading...</h1>
  }
 
  return (
    <div className="App">
      <ToolbarComponent openDrawerHandler={openDrawer} />
      <DrawerComponent
        left={left}
        toggleDrawerHandler={toggleDrawer}
      />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/feed" exact component={() => <Default news={news} /> } />
          {/* <Route path="/feed/:id" component={newsPost}/> */}
          <Route component={() => <Default news={news} /> }  render={() => <Redirect to= "/feed" />} /> //Redirect to Default page for now
        </Switch>
      </Container>
    </div>
  );
}

export default App;

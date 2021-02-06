import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard/NewsCard";
import SampleComponent from "./SampleComponent";
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { config } from './config';
 
import "./App.css";
 
 
function App() {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [left, setLeft] = useState(false);
 
  function toggleDrawer() {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
 
    setLeft(false);
  }
 
  function openDrawer() {
    setLeft(true);
  }
 
  useEffect(() => {
    axios.get(`http://newsapi.org/v2/everything?q=covid&from=2021-01-06&sortBy=publishedAt&apiKey=${config.key}`).then(response => {
      setNews(response.data.articles);
      console.log(response);
      setLoading(false);
    })
  })

  if(isLoading) {
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
        <h1>COVID-19 Updates</h1>
        <div>Ontario</div>
        <header className="App-header">
          {news.map((article) => (
            <NewsCard article={article} />
          ))}
          <SampleComponent color="blue" />
        </header>
      </Container>

      

    </div>
  );

}

export default App;
